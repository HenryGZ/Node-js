const express = require('express');

const taskController = require('./controllers/tasksController'); //esse taskController é o arquivo taskController.js que está na pasta src/controllers

const router = express.Router(); //aqui eu estou criando uma variavel router que vai receber o express.Router() que é uma função que retorna um objeto que vai ser responsavel por gerenciar as rotas da aplicação

// router.get('/', (req, res) => {
//     res.status(200).res.send('Hello World!')
// })

router.get('/tasks', taskController.getAll); //aqui eu estou dizendo que quando o usuario acessar a rota /tasks, o router vai chamar a função getAll que está no arquivo taskController.js que está na pasta src/controllers

module.exports = router;//aqui eu estou exportando o objeto router para que ele possa ser usado em outros arquivos