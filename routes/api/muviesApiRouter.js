const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/moviesApiController');

router.get('/', moviesApiController.list);

router.get('/search', moviesApiController.search);

router.get('/:id', moviesApiController.shwo);

router.post('/', moviesApiController.store);

router.delete('/:id', moviesApiController.delete);


module.exports = router;