var fs = require('fs'); //importa o módulo fs para poder manipular arquivos
var http = require('http'); //importa o módulo http para poder criar um servidor http

http.createServer(function (request, response) {

    fs.readFile('example.html', function (err, data) { //aqui estamos lendo o arquivo example.html
    
        response.writeHead(200, {'Content-Type': 'text/html'}); //Esta linha está enviando uma resposta HTTP com o status 200
    
        response.write(data); //aqui estamos escrevendo o conteúdo do arquivo example.html na resposta HTTP
    
        response.end(); //finaliza a resposta
    
    });

}).listen(8000); 