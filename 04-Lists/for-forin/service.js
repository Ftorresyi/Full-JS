//importar o axios para consumir uma API COM DADOS DE STAR WARS fazendo HTTP request

const axios = require('axios');
const URL = `https://swapi.py4e.com/api/people`;

//Função assíncrona que aguarda a consulta por nome, e fica esperando (AWAIT) 
//para obter a url(get(URL)) e retorna os dados solicitados (return response.data)
async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data;
    
}

//Checar se a consulta deu certo:
obterPessoas()
    .then (function(resultado){ //quando chegar no resultado
        console.log('resultado') //printa na tela o resultado
    })
    .catch(function(erro){ //se der algum problema:
        console.error('Deu ruim', erro) //printa o erro
    })

//transformar esse arquivo em um módulo para que os outros arquivos possam visualizar tbm
//basta exportá-lo:
module.exports = {
    obterPessoas
}

//Consulte outras formas de usar o AXIOS para fazer requisições GET, POST, ..
//https://attacomsian.com/blog/http-requests-axios
//Exemplo simples de requisição GET:
/*
const axios = require('axios')

// Send a GET request
axios({
  method: 'get',
  url: 'https://reqres.in/api/users',
  data: {
    name: 'Jane',
    country: 'Canada'
  }
})
*/