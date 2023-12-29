const express = require('express');

const taskController = require('./controllers/tasksController'); //esse taskController é o arquivo taskController.js que está na pasta src/controllers

const taskMiddleware = require('./middlewares/taskMiddleware'); //esse taskMiddleware é o arquivo taskMiddleware.js que está na pasta src/middlewares

const router = express.Router(); //aqui eu estou criando uma variavel router que vai receber o express.Router() que é uma função que retorna um objeto que vai ser responsavel por gerenciar as rotas da aplicação

router.get('/tasks', taskController.getAll); //aqui eu estou dizendo que quando o usuario acessar a rota /tasks, o router vai chamar a função getAll que está no arquivo taskController.js que está na pasta src/controllers

router.post('/create_tasks',taskMiddleware.validateBody, taskController.createTask); //rota executa o middleware e depois o controller, o middleware faz verificações no que 
                                                                                    //está sendo recebido no body da requisição

router.delete('/delete_tasks/:id', taskController.deleteTask); //aqui eu estou dizendo que quando o usuario acessar a rota /delete_tasks, 
                                                            //o router vai chamar a função deleteTask que está no arquivo taskController.js que está na pasta src/controllers

router.put('/update_tasks/:id',taskMiddleware.validateUpdate,taskController.updateTask);

module.exports = router;//aqui eu estou exportando o objeto router para que ele possa ser usado em outros arquivos