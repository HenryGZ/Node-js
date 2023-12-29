const taskModel = require('../models/tasksModel');

const getAll = async (req,res)=>{

    const tasks = await taskModel.getAll(); //aqui eu estou chamando a função getAll que está no arquivo taskModel.js que está na pasta src/models

    return res.status(200).json({tasks}) //retorna mensagem de sucesso e o objeto criado, codigo 200 significa que a requisição foi bem sucedida
};

const createTask = async (req,res)=>{

    const createTask = await taskModel.createTask(req.body); //aqui eu estou passando o objeto req.body como parametro para a função createTask que está no arquivo 
                                                            //taskModel.js que está na pasta src/models

    return res.status(201).json({createTask}) //retorna mensagem de sucesso e o objeto criado, codigo 201 significa que o objeto foi criado com sucesso
};

const deleteTask = async (req,res)=>{

    const {id} = req.params; 

    await taskModel.deleteTask(id); //aqui eu estou passando o objeto req.params como parametro para a função deleteTask que está no arquivo 
                                                        //taskModel.js que está na pasta src/models

    return res.status(204).json() //retorna mensagem de sucesso, codigo 200 significa que a requisição foi bem sucedida
};

const updateTask = async (req,res)=>{

    const {id} = req.params; //pega o valor da chave id que está dentro do objeto req.params que foi passado como parametro para a função updateTask

    await taskModel.updateTask(id, req.body); //aqui eu estou passando o objeto req.params e req.body como parametro para a função updateTask que está no arquivo 
                                                        //taskModel.js que está na pasta src/models

    return res.status(204).json() //retorna mensagem de sucesso, codigo 200 significa que a requisição foi bem sucedida
};

module.exports = {

getAll,
createTask,
deleteTask,
updateTask

};//aqui eu estou exportando o objeto router para que ele possa ser usado em outros arquivos
