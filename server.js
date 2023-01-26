const app = require ('./app');
const mongoose = require('mongoose');  //Chama o mongoose

require('dotenv').config({path:'variables.env'});

/*//Conexão ao banco de dados
mon0goose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});         // String de conexão como parametro
mongoose.Promise = global.Promise;             //  Liberando funcionalidade para o mongoose
mongoose.connection.on('error', (error) => {   // Log de Erro
    console.error("ERROR: " +error.message);
})

mongoose.set('strictQuery', false);*/

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'),() => {
    console.log("Servidor Rodando na porta: "+server.address().port);
});