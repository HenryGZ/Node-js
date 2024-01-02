document.addEventListener('DOMContentLoaded', (event) => {


    const addForm = document.querySelector('.add-form');
    const inputTask = document.querySelector('#task');

    const addTask = async (event) => {

        event.preventDefault(); //impedindo o comportamento padrão do formulário
        
        if(inputTask){
            const task = {
                title: inputTask.value,
            }
                await fetch ('http://localhost:3333/create_tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: JSON.stringify(task.title),
                })
            }); //fazendo a requisição para adicionar a tarefa
            window.loadTasks(); //recarregando as tarefas
        }
    };

addForm.addEventListener('submit', addTask); //adicionando o evento de submit no formulário de adicionar tarefas
});