module.exports = function(sequelize, dataTypes) {
    let alias ='Actor';
   
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
           type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        }
    }
    let config ={
        tableName:'actors',
        timestamps: false
    }


   let Actor = sequelize.define(alias, cols, config);

   Actor.associate = function (models){
    Actor.belongsToMany(models.Pelicula, {
        as: 'peliculas',  //alias 
        through: 'actor_movie', //atravez de que tabla pibot se unen los dos modelos.
        foreignKey : 'actor_id', //nombrfe de la columna de la tabla pibot que hace referencia a modelo actual.
        otherKey: 'movie_id', //nombre de la columna en la tabla pibot que hace referencia a la coneccion.
        timestamps: false // no tine la columna la tabla crear_edad.
    });
}

   return Actor; 

}