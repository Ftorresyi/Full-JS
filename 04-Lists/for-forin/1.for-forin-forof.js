const service = require('./service.js');

async function main(){
    try{
        const result = await service.obterPessoas('a')
        const names = []

        console.time('for') //checa o tempo de execução do bloco for - inicio
        for (let i = 0; i <= result.results.length - 1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for') //checa o tempo de execução do for - fim (Tempo de execução do for: 0.092ms)
    
    //O uso do for in no lugar do for comum é mais prático, pois não é necessário criar uma variável com o valor inicial, nem um incrementador
    console.time('forin')
    for (let i in result.results){
        const pessoa = result.results[i]
        names.push(pessoa.name)
    }
    console.timeEnd('forin') //checa o tempo de execução do for - fim (Tempo de execução do for: 0.105ms)
        console.time('forof')
        for (pessoa of result.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forof') //checa o tempo de execução do for - fim (Tempo de execução do for: 0.233ms)
    console.log(`names`, names)

    }catch (error){
        console.error('erro interno', error);
    }

}

main()

//COMPARAÇÃO DOS TEMPOS DE EXECUÇÃO DE CADA FOR AO RODAR SIMULTANEAMENTE:
// for: 0.111ms
// forin: 0.037ms - MAIS RÁPIDO!!!!
// forof: 0.051ms



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