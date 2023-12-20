var http = require('http'); //importa o módulo http para poder criar um servidor http

var url = require('url'); //importa o módulo url para poder manipular urls

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});  //Esta linha está enviando uma resposta HTTP com o status 200

    var q = url.parse(request.url, true).query;  //aqui estamos pegando a query string da url da requisição http
    var txt = q.year + " " + q.month;  //aqui estamos concatenando os valores dos parâmetros da query string
    response.end(txt);  //finaliza a resposta

}).listen(8000); //aqui estamos chamando a função createServer do módulo http, que cria um novo servidor HTTP. A função que passamos como argumento é chamada sempre que uma requisição HTTP é recebida pelo servidor.