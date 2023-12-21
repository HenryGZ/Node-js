//Aqui, estamos definindo uma função chamada myDateTime e 
//a exportando para que possa ser usada em outros arquivos. 
//exports é um objeto especial em Node.js que é usado para exportar 
//coisas de um módulo.

exports.myDateTime = function () {
    return Date(); //retorna data e horas atuais
};