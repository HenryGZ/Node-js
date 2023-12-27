const app = require('./app'); //esse app é o arquivo app.js que está na pasta src

const dotenv = require('dotenv').config();//esse dotenv é para que o node consiga ler o arquivo .env e assim conseguir ler as variaveis de ambiente

const PORT = process.env.PORT || 3333; //aqui eu estou dizendo que a porta que o servidor vai rodar é a que está no arquivo .env ou a porta 3000

app.listen(PORT, () => console.log('Example app listening on port 3000!'));