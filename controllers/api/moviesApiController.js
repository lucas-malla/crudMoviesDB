const DB = require('../../database/models');
const Op = DB.sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Pelicula.findAll()
          .then(movies => {
           return res.status(200).json({
                total:movies.lenght,
                data:movies,
                status: 200
            });
          })
    },

    shwo: (req, res) => {
        DB.Pelicula.findByPk(req.params.id)
        .then(movies =>{
            return res.status(200).json({
                data:movies,
                status: 200
            });
        })
    },

    store: (req, res) => {
        DB.Pelicula
          .create(req.body)
          .then( movie => {
            return res.status(200).json({
                data:movie,
                satatus:200,
                create: 'ok'
            });
          })
    },

    delete: (req, res) => {
       DB.Pelicula
        .detroy({
            where: { id:req.params.id }
        })
        .then(response => {
            return res.json(response)
        })
    },

    search:(req, res) =>{
        DB.Pelicula
          .findAll({
            where:{title:{[Op.like]:'%' + req.query.keyword + '%'}}
          })
          .then(movies =>{
            if(movies.length > 0 ){
                return res.status(200).json(movies);
            }
            return res.status(200).json('No existe la pelicual')
        })
    }

}