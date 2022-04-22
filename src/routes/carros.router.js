const express = require('express');
const router = express.Router();

const carrosController = require('../controllers/carros.controller');

router.get('/all-carros', carrosController.allCarrosController);

router.get('/carro/:id', carrosController.carroByIdController);

router.post('/create', carrosController.createCarroController);

router.put('/update/:id', carrosController.updateCarroController);

router.delete('/delete/:id', carrosController.deleteCarroController);

module.exports = router;
