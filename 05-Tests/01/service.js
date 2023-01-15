//importar o axios para consumir uma API COM DADOS DE STAR WARS fazendo HTTP request

const axios = require('axios');
const URL = `https://swapi.py4e.com/api/people`;

//Função assíncrona que aguarda a consulta por nome, e fica esperando (AWAIT) 
//para obter a url(get(URL)) e retorna os dados solicitados (return response.data)
async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data.results.map(mapearPessoas) //Não entendi de onde veio essa variável results e porquê precisou chamar ela, já que nesse código ela não foi usada em nenhum outro lugar.
    
}

async function mapearPessoas (item){
    return {
        nome: item.name,
        peso: item.height,
    }
}

//Checar se a consulta deu certo imprimirá na tela: 'A Consulta deu certo!':
obterPessoas()
    .then (function(resultado){ //quando chegar no resultado
        console.log('A Consulta deu certo!') //printa na tela o resultado
    })
    .catch(function(erro){ //se der algum problema:
        console.error('Deu ruim', erro) //printa o erro
    })

//transformar esse arquivo em um módulo para que os outros arquivos possam visualizar tbm
//basta exportá-lo:
module.exports = {
    obterPessoas
}