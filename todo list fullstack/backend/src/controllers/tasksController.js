const taskModel = require('../models/tasksModel');

const getAll = async (req,res)=>{

    const tasks = await taskModel.getAll();

    return res.status(200).json({tasks})
};

module.exports = {

getAll

};//aqui eu estou exportando o objeto router para que ele possa ser usado em outros arquivos
