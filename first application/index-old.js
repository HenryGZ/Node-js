//esse arquivo estpa comentado como -old para usar outro index.js que carrega uma página html

const http = require('http'); //importa o módulo http para poder criar um servidor http

//Aqui, estamos chamando a função createServer do módulo http, que cria um novo servidor HTTP. 
//A função que passamos como argumento é chamada sempre que uma requisição HTTP é recebida pelo servidor.
http.createServer(function (request, response) {
    
  response.writeHead(200, {'Content-Type': 'text/plain'});  //Esta linha está enviando uma resposta HTTP com o status 200
                                                            //e um cabeçalho que indica que o conteúdo da resposta é texto simples.
  response.end('Hello World');  //esse é o texto simples da resposta http

}).listen(8000);    //aqui estamos dizendo que o servidor deve escutar na porta 8000

console.log('Server running at http://127.0.0.1:8000/');    //aqui estamos imprimindo uma mensagem no console do servidor