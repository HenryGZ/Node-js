

document.addEventListener('DOMContentLoaded', (event) => {

    const tbody = document.querySelector('tbody');

    const formatDate = (dateString) => {
            
            const date = new Date(dateString); //criando um objeto Date com a data passada
    
            const day = date.getDate(); //pegando o dia
            const month = date.getMonth() + 1; //pegando o mês
            const year = date.getFullYear(); //pegando o ano
    
            return `${day}/${month}/${year}`; //retornando a data formatada
    };

    const fetchTasks = async () => {
        const response = await fetch('http://localhost:3333/tasks'); //buscando as tarefas
        const tasks = await response.json(); //transformando em json
        return tasks;//retornando as tarefas
    }; //função para buscar as tarefas

    const createElement = (tag, innerText = '', innerHTML = '') => {
        const element = document.createElement(tag); //criando o elemento com a tag passada

        if(innerText){
            element.innerText = innerText;
        } //se o innerText for passado, ele vai adicionar o innerText no elemento

        if(innerHTML){
            element.innerHTML = innerHTML;
        }//se o innerHTML for passado, ele vai adicionar o innerHTML no elemento

        return element; //retornando o elemento criado
    };//função para criar elementos

    const createSelect = (value) => {

        const options = `
        <option value="Pendente">Pendente</option>
        <option value="Andamento">Andamento</option>
        <option value="Concluído">Concluído</option>`;
        


        const select = createElement('select', '', options); //criando o select com as opções

        select.value = value; //atribuindo o valor passado no select

        return select; //retornando o select criado
    };//função para criar o select

    const createRow = (task) => {

        const {id, title, status,created_at} = task; //desestruturando o objeto task para pegar os valores

        const tr = createElement('tr'); //criando a linha da tabela com a função createElement
        const tdTitle = createElement('td', title); //atribuindo o valor do title na coluna da tabela
        const tdStatus = createElement('td'); //atribuindo o valor do status na coluna da tabela
        const formattedDate = formatDate(created_at); //formatando a data
        const tdCreatedAt = createElement('td', formattedDate); //atribuindo o valor da data formatada na coluna da tabela
        const tdActions = createElement('td'); //criando a coluna de para os botões

        const select = createSelect(status); //criando o select com as opções e passando o valor do status
        const editButton = createElement('button','', '<span class="material-symbols-outlined">edit</span>'); //criando o botão de editar
        const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>'); //criando o botão de deletar

        tdStatus.appendChild(select); //adicionando o select na coluna de status
        deleteButton.classList.add('btn-delete'); //adicionando a classe btn-delete no botão de deletar
        editButton.classList.add('btn-edit'); //adicionando a classe btn-edit no botão de editar

        tdActions.appendChild(editButton); //adicionando o botão de editar na coluna de ações
        tdActions.appendChild(deleteButton); //adicionando o botão de deletar na coluna de ações

        tr.appendChild(tdTitle); //adicionando a coluna de title na linha da tabela
        tr.appendChild(tdCreatedAt);//adicionando a coluna de created_at na linha da tabela
        tr.appendChild(tdStatus);//adicionando a coluna de status na linha da tabela
        tr.appendChild(tdActions);//adicionando a coluna de ações na linha da tabela


        tbody.appendChild(tr);//adicionando a linha na tabela

        return tr; //retornando a linha criada

    }; //função para criar as linhas da tabela


    window.loadTasks = async () => {

        tbody.innerHTML = ''; //limpando a tabela

        const tasks = await fetchTasks(); //buscando as tarefas

        tasks.tasks.forEach((task) => {

            const tr = createRow(task); //criando as linhas da tabela
            tbody.appendChild(tr); //adicionando as linhas na tabela

        }); //criando as linhas da tabela
    }

    window.loadTasks = loadTasks; //exportando a função loadTasks para que ela possa ser usada em outros arquivos

    loadTasks(); //carregando as tarefas

});

