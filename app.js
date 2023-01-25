// Fazendo a importação do Express
const express = require("express");

// Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();
router.get('/',(req, res) => { //Primeira Rota // Fução Anonima //Dois Parâmetro
    res.send("Projeto 2 Gustavo Oliveira Postigo Ramos / Fatec Luigi Papaiz Diadema") 
});

//Configurações básicas do aplicativo
const app = express();
app.use('/', router); //Foi passado 1 rota pois foi criado apenas 1

module.exports = app; //Exportamos o app, pois vai ser importado pelo servidor