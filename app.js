//IMPORTANDO MODULOS

const express = require("express");

const app = express();

const rotasDeProdutos= require('./routes/produtos');
const rotas = require('./routes');

app.use(express.json());

app.listen(3000, ()=> console.log("o servidor foi instalado"));

