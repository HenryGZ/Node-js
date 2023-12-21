var fs = require('fs'); //importa o módulo fs para poder manipular arquivos

//O fs.rename()método renomeia o arquivo especificado:
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) { //aqui estamos renomeando o arquivo mynewfile1.txt para myrenamedfile.txt

    if (err) throw err; //se houver erro, lança uma exceção

    console.log('File renamed!'); //se não houver erro, imprime a mensagem "File renamed!"

});