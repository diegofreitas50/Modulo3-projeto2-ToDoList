const Carro = require('../models/Carro');
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

const updateCarroService = (id, carroEdited) => {
    carroEdited['id'] = id;
    const carroIndex = carros.findIndex((carro) => carro.id == id);
    carros[carroIndex] = carroEdited;
    return carroEdited;
};

const deleteCarroService = (id) => {
    const carroIndex = carros.findIndex((carro) => carro.id == id);
    return carros.splice(carroIndex, 1);
};

module.exports = {
    allCarrosService,
    carroByIdService,
    createCarroService,
    updateCarroService,
    deleteCarroService,
};
