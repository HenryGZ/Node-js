var fs = require('fs'); //importa o módulo fs para poder manipular arquivos

//O fs.appendFile()método anexa conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado:
fs.appendFile('mynewfile1.txt', 'append function has been executed', function (err) { //aqui estamos criando um novo arquivo chamado mynewfile1.txt 
                                                                    //e escrevendo o conteúdo "Hello content!" nele
    if (err) throw err; //se houver erro, lança uma exceção

    console.log('Saved!'); //se não houver erro, imprime a mensagem "Saved!"

});

fs.writeFile('mynewfile2.txt', 'write function has been executed', function (err) { //aqui estamos criando um novo arquivo chamado mynewfile2.txt

    if (err) throw err; //se houver erro, lança uma exceção

    console.log('Saved!'); //se não houver erro, imprime a mensagem "Saved!"

});

