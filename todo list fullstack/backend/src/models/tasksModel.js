const connection = require('./connection');

const getAll = async () => {
    //async é uma palavra chave que indica que a função é assincrona(ou seja, ela não vai ser executada de forma sequencial, ela vai ser executada de forma paralela)
    //await é uma palavra chave que indica que a função deve esperar a execução de uma função assincrona para continuar a execução
    const tasks = await connection.execute('SELECT * FROM TASKS');//aqui eu estou dizendo que a variavel tasks vai receber o resultado da query SELECT * FROM tasks
    return tasks;//aqui eu estou retornando o resultado da query
};

module.exports = {
    getAll
};