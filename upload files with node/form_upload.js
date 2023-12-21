var http = require('http');
var fs = require('fs');
var formidable = require('formidable'); //incluindo o módulo Fomidable para poder analisar o aquivo carregado eassim que chegar no servidor
//esse modulo deve ser instalado com o npm install formidable

//grava um formulário HTML, com o campo de upload de arquivo
http.createServer(function (request, response) {

    if(request.url == '/fileupload'){ //se a url for /fileupload
        var form = new formidable.IncomingForm(); //cria um objeto IncomingForm
        form.parse(request, function(err, fields, files){ //analisa o arquivo carregado
            var fileKey = Object.keys(files)[0];//pega a chave do arquivo carregado (fileupload)
            var oldpath = files[fileKey].path; //pega o caminho do arquivo temporário
            var newpath = 'C:/Users/Henry/Documents/GitHub/Node js/upload files with node' + files.fileupload.name; //define o novo caminho do arquivo
            fstat.rename(oldpath, newpath, function(err){ //move o arquivo para o novo caminho
            response.write('File uploaded'); //escreve na resposta
            response.end(); //finaliza a resposta
            });
        });
    }
    else{
        response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); //cria um formulário com o método POST e o enctype é multipart/form-data (para upload de arquivos)
    response.write('<input type="file" name="fileupload"><br>'); //cria um campo de entrada de arquivo
    response.write('<input type="submit">'); //cria um botão de envio
    response.write('</form>'); //fecha o formulário
    return response.end(); //retorna a resposta
    }
    

}).listen(8000);