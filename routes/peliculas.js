var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController');

//creacion
router.get('/crear', peliculasController.crear);
router.post('/crear', peliculasController.guardado);
 
//Lectura de pelis
router.get('/', peliculasController.listado);

//Detalle
router.get('/:id', peliculasController.detalle);

//Actualizacion
router.get('/editar/:id', peliculasController.editar);
router.post('/editar/:id', peliculasController.actualizar);

// Borrar
router.post('/borrar/:id', peliculasController.borrar);

module.exports = router;
