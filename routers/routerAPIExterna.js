const express = require('express');
const router = express.Router();

const {getMovies, getMovie} = require('../controllers/controllerAPIExterna')



//* VIEW USUARIO: BUSCAR PELÍCULA (obtener todas las películas)
router.get('/', getMovies);


//* VIEW USUARIO: DETALLE PELÍCULA (obtener una película)
router.get('/:id', getMovie);



module.exports = router;