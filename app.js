// Fazendo a importação do Express
const express = require("express");
const router = require('./routes/index');
const mustache = require('mustache-express');
//Configurações básicas do aplicativo
const app = express();
app.use("/", router); //Foi passado 1 rota pois foi criado apenas 1

app.use(express.json());

app.engine('mst', mustache(__dirname + '/views/partials', '.mst'));  //Configura o motor, extensão utilizada
app.set('view engine', 'mst'); //Setar motor visual

// Pega o diretorio absoluto do projeto e aumenta para pasta views concatenando
app.set('views', __dirname + '/views');

module.exports = app; //Exportamos o app, pois vai ser importado pelo servidor