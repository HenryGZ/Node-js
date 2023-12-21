var fs = require('fs'); //importa o módulo fs para poder manipular arquivos

//O fs.unlink()método exclui o arquivo especificado:
fs.unlink('mynewfile2.txt', function (err) { //aqui estamos excluindo o arquivo mynewfile2.txt

    if (err) throw err; //se houver erro, lança uma exceção

    console.log('File deleted!'); //se não houver erro, imprime a mensagem "File deleted!"

});

