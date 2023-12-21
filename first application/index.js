const express = require('express'); //importa o módulo express para poder criar um servidor http

const app = express();  //cria um novo servidor express

const path = require('path');  //importa o módulo path para poder manipular caminhos de arquivos

const router = express.Router();  //cria um novo roteador express

router.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html')); //envia o arquivo index.html como resposta

  })

router.get('/about', function(req, res) {

    res.sendFile(path.join(__dirname + '/about.html')); //envia o arquivo about.html como resposta

  })


const dt = require('./myfirstmodule'); //importa o módulo myfirstmodule.js
router.get('/hour', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});  //Esta linha está enviando uma resposta HTTP com o status 200
                                                        //e um cabeçalho que indica que o conteúdo da resposta é texto html.
    res.write("The date and time are currently: " + dt.myDateTime()); //escreve na resposta o texto e a data e hora atuais

    res.end();  //finaliza a resposta
})

app.use('/', router); //diz ao servidor para usar o roteador

app.listen(process.env.port || 8000); //diz ao servidor para escutar na porta 8000