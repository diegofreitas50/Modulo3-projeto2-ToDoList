const express = require('express');
const cors = require('cors');
const route = require('./src/routes/carros.router');
const connecteToDatabase = require('./src/database/database');
const port = 3000;
const app = express();

connecteToDatabase();

app.use(express.json());
app.use(cors());
app.use('/carros', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
