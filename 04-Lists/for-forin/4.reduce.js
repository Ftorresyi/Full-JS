//REDUCE - Objetivo é reduzir um array em um único objeto, único resultado

const {obterPessoas} = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial: this[0] // se valor inicial for passado, será usado ele, senão pegar o valor na posição zero
    for (let index=0; index <= this.length - 1; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}


async function main(){
    try{
        const {results} = await obterPessoas(`a`)
        /*
        //ESSA FUNÇÃO SOMA O DADOS DE UM ARRAY NUMERICO: 
        const pesos = results.map(item => parseInt(item.height))
        console.log('Pesos', pesos)
         // [20.2, 30,3, 40,5] = 0 => a ideia é somar os dados de um array e retornar o resultado final
        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        }, 0) // O zero aqui é para iniciar o valor inicial da segunda variavel, pois caso ela nao tenha valor, a função dará erro. */

        //Pegar o resultado somente de um texto invés de pegar o resultado mapeado
        //concatenar os arrays e retornar uma lista só:
        const minhaLista = [
            [results[0].name,
            results[1].name],
            [results[2].name,
            results[3].name]
        ]
        //console.log('Minha Lista:', minhaLista)

        const total = minhaLista.meuReduce((anterior, proximo) => {
            // pega a lista anterior e concatena com a próxima lista e depois transforma em um array
            return anterior.concat(proximo)
        }, [])
        .join(', ') //Transforma toda a lista em uma única string, separando cada elemento por vírgula
        console.log('Total Personagens:', total)

        }catch(error){
        console.error(`DEU RUIM`,error)
    }
}

main()