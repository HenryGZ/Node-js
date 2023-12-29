const connection = require('./connection');

const getAll = async () => {
    //async é uma palavra chave que indica que a função é assincrona(ou seja, ela não vai ser executada de forma sequencial, ela vai ser executada de forma paralela)
    //await é uma palavra chave que indica que a função deve esperar a execução de uma função assincrona para continuar a execução
    const tasks = await connection.execute('SELECT * FROM TASKS');//aqui eu estou dizendo que a variavel tasks vai receber o resultado da query SELECT * FROM tasks

    //const [tasks] = await connection.execute('SELECT * FROM TASKS');//aqui eu estou dizendo que a variavel tasks vai receber o resultado da query SELECT * FROM tasks
    //como o select me traz 2 resultados, o primeiro é o resultado da query e o segundo é o metadado da query, eu estou dizendo que eu quero apenas o primeiro resultado, 
    //que é o resultado da query(essa query tras um array de duas posições)

    return tasks[0];//aqui eu estou retornando o resultado da query
};

const createTask = async (task) => {

    const {title} = task; //aqui eu estou pegando o valor da chave title que está dentro do objeto task que foi passado como parametro para a função createTask

    const dateUTC = new Date(Date.now()) //aqui eu estou criando uma variavel que vai receber a data atual em UTC

    //os [] servem para que eu possa pegar o primeiro elemento do array que é retornado pela função execute
    const [createdTask] = await connection.execute(
        'INSERT INTO TASKS (title, status, created_at) VALUES (?, ?, ?)',
        [title, 'pendente', dateUTC]
    ); //query que vai inserir uma nova tarefa no banco de dados, com satus pendente, nome e a data atual em UTC

    return createTask;
};

const deleteTask = async (id) => {

    const deletedTask = await connection.execute(
        'DELETE FROM TASKS WHERE id = ?',
        [id]
    );
    return deletedTask;
};

const updateTask = async (id, task) => {

    const {title, status} = task; //pega o valor da chave title e status que está dentro do objeto task que foi passado como parametro para a função updateTask

    const updatedTask = await connection.execute(
        'UPDATE TASKS SET title = ?, status = ? WHERE id = ?',
        [title,status, id]
    );

    return updatedTask;

};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}; //aqui eu estou exportando o objeto tasksModel para que ele possa ser usado em outros arquivos