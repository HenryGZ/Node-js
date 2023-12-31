const express = require('express');

const cors = require('cors');

const router = require('./router');

const app = express();

app.use(cors()); //aqui eu estou dizendo para o express que eu quero que ele use o cors para permitir que a aplicação seja acessada por qualquer endereço
app.use(express.json());//aqui eu estou dizendo para o express que eu quero que ele use o json para fazer o parse do body da requisição
app.use(router); //aqui eu estou dizendo para o express que eu quero que ele use o router para gerenciar as rotas da aplicação

module.exports = app //é necessário para o teste exportar o app