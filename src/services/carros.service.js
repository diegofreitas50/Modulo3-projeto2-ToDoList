const Carros = require('../models/Carro');

const allCarrosService = async () => {
    const carros = await Carros.find();
    return carros;
};

const carroByIdService = async (id) => {
    const carro = await Carros.findById(id);
    return carro;
};

const createCarroService = async (newCarro) => {
    const carroCreated = await Carros.create(newCarro);
    return carroCreated;
};

const updateCarroService = async (id, carroEdited) => {
    const carroUpdate = await Carros.findByIdAndUpdate(id, carroEdited)
    return carroEdited;
};

const deleteCarroService = async (id) => {
    return await Carros.findByIdAndDelete(id)
};

module.exports = {
    allCarrosService,
    carroByIdService,
    createCarroService,
    updateCarroService,
    deleteCarroService,
};
