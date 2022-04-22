const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  modelo: {
    type: String,
    require: true,
  },
  cor: {
    type: String,
    require: true,
  },
  marca: {
    type: String,
    require: true,
  },
  ano: {
    type: Number,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
});

const Carro = mongoose.model('carros', CarroSchema);

module.exports = Carro;
