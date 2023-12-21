var fs = require('fs'); //importa o módulo fs para poder manipular arquivos

//O fs.appendFile()método anexa conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado:
fs.appendFile('mynewfile1.txt', 'Hello content!, FILE 1', function (err) { //aqui estamos criando um novo arquivo chamado mynewfile1.txt 
                                                                    //e escrevendo o conteúdo "Hello content!" nele

    if (err) throw err; //se houver erro, lança uma exceção

    console.log('Saved!'); //se não houver erro, imprime a mensagem "Saved!"

});

//O fs.open()método recebe um "sinalizador" como segundo argumento, se o sinalizador for "w" para "escrita", o arquivo especificado é aberto para gravação. Se o arquivo não existir, 
//um arquivo vazio será criado:
fs.open('mynewfile2.txt', 'w', function (err, file) { //aqui estamos criando um novo arquivo chamado mynewfile2.txt com o modo de escrita 'w' (write) 
                                                        //se o arquivo não existir ele será criado, se existir ele será sobrescrito

    if (err) throw err; //se houver erro, lança uma exceção

    console.log('Saved!'); //se não houver erro, imprime a mensagem "Saved!"

});

//O fs.writeFile()método substitui o arquivo e o conteúdo especificados, se existirem. Se o arquivo não existir, um novo arquivo contendo 
//o conteúdo especificado será criado:
fs.writeFile('mynewfile3.txt', 'Hello content! FILE 3', function (err) { //aqui estamos criando um novo arquivo chamado mynewfile3.txt

    if (err) throw err; //se houver erro, lança uma exceção

    console.log('Saved!'); //se não houver erro, imprime a mensagem "Saved!"

});

