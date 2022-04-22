const carrosServices = require('../services/carros.service');
const mogoose = require('mongoose');
const { default: mongoose } = require('mongoose');

const allCarrosController = async (req, res) => {
  const allCarros = await carrosServices.allCarrosService();

  if (allCarros.length == 0) {
    return res.status(404).send({ message: 'Nenhum carro cadastrato!' });
  }

  res.send(allCarros);
};

const carroByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const chosenCarro = await carrosServices.carroByIdService(idParam);

  if (!chosenCarro) {
    return res.status(404).send({ message: 'Carro não encontrado!' });
  }

  res.send(chosenCarro);
};

const createCarroController = async (req, res) => {
  const carro = req.body;

  if (
    !carro ||
    !carro.modelo ||
    !carro.cor ||
    !carro.marca ||
    !carro.ano ||
    !carro.foto
  ) {
    return res.status(400).send({
      message:
        'Erro! Você não preencheu todos os dados necessários para adicionar um novo carro.',
    });
  }

  const newCarro = await carrosServices.createCarroService(carro);
  res.status(201).send(newCarro);
};

const updateCarroController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const carroEdit = req.body;

  if (
    !carroEdit ||
    !carroEdit.modelo ||
    !carroEdit.cor ||
    !carroEdit.marca ||
    !carroEdit.ano ||
    !carroEdit.foto
  ) {
    return res.status(400).send({
      message:
        'Erro! Você não preencheu todos os dados necessários para atualizar o carro selecionado.',
    });
  }

  const updatedCarro = await carrosServices.updateCarroService(idParam, carroEdit);
  res.send(updatedCarro);
};

const deleteCarroController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  
  await carrosServices.deleteCarroService(idParam);
  res.send({ message: 'Carro deletado com sucesso!' });
};

module.exports = {
  allCarrosController,
  carroByIdController,
  createCarroController,
  updateCarroController,
  deleteCarroController,
};
