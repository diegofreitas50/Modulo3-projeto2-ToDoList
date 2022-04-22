const mongoose = require('mongoose');

const connecteToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/carros-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro ${error}`),
    );
};

module.exports = connecteToDatabase;
