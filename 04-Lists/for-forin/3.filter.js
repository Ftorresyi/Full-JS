//o {..} indica que vamos importar apenas o item obterPessoas do arquivo service.js para facilitar a utilização. Isso é uma técnica chamada destruking do JS
const {obterPessoas} = require('./service')

async function main() {
    try {
        const {results} = await obterPessoas(`a`)

        const familiaLars = results.filter(function (item){
            // por padrão precisa retornar um boleano
            // para informar se deve manter ou remover da lista
            //false - remove da lista
            //true - mantem
            //não encontrou  = -1
            //econtrou = posicaoNoArray
            // 0, "", null, undefined === false
            const result = item.name.toLowerCase().indexOf(`lars`) === -1
            return result
        })
        const names = familiaLars.map((pessoa)=>{
            return {
                nome: pessoa.name,
                genero: pessoa.gender
            }
        })

        console.log(names)


    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()

//Para ver mais bons exemplos:https://consolelog.com.br/filtrar-array-filter-map-javascript-nodejs-typescript/




//TESTE DE USO DE VARIAVEIS DE UM DICIONÁRIO:
/* const item = {
    nome: 'yindi',
    idade: 32,
}

const {nome,idade} = item
console.log(nome)
 */