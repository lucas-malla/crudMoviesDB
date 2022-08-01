let db = require('../database/models');

let peliculasController = {
     crear: function (req, res){
          db.Genero.findAll()
          .then(function(genero){
               return res.render('creacionPeliculas', {genero:genero});
          })
     },
     guardado: function (req, res){
          db.Pelicula.create({
                title: req.body.titulo,
                awards: req.body.premios,
                release_date: req.body.release_date,
                genre_id: req.body.genero,
                length: req.body.length,
                rating: req.body.rating
          });
          res.redirect('/peliculas');
          
     },
     listado: function (req, res){
          db.Pelicula.findAll()
          .then(function(pelicula){
            res.render('listadoPeliculas', {pelicula:pelicula});
          });
     },
     detalle: function (req, res){
          db.Pelicula.findByPk(req.params.id, {
               include: [{association:'genero'}, {association:'actores'}]
          })
          .then(function(pelicula){
           res.render('detallePeliculas', {pelicula:pelicula});
     })
},
editar: function(req, res){
     let pedidoPelicula = db.Pelicula.findByPk(req.params.id);
     let pedidoGeneros = db.Genero.findAll();
     
     Promise.all([pedidoPelicula, pedidoGeneros])
          .then(function([pelicula, genero]) {
               res.render('editarPelicula', {pelicula:pelicula}, {genero:genero})
          });


},
 actualizar: function(req, res){
     db.Pelicula.update({
          title: req.body.titulo,
          awards: req.body.premios,
          release_date: req.body.release_date,
          genre_id: req.body.genero,
          length: req.body.length,
          rating: req.body.rating
    }, {
         where:{
              id:req.params.id
         }
    });
    res.redirect('/peliculas/' + req.params.id);
 },
 borrar: function(req, res){
      db.Pelicula.destroy({
           where:{
                id: req.params.id
           }
      })
      res.redirect('/peliculas');
 }
}

module.exports = peliculasController;