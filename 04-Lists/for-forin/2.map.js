const service = require('./service')

async function main(){
    try{
        const results = await service.obterPessoas(`a`)
        //const names = []
        // results.results.forEach(function(item){
        //   names.push(item.name)
            
        // })

        //O .map faz a mesma função que o For ForEach
        // const names = results.results.map(function(pessoa){
        //     return pessoa.name
        // })

        // O .map pode ser usada de forma mais simplificada, no caso "pessoa" é a função e para especificar isso é usado o "=>"
        //O .map é um for "reduzido" para ser utilizado em listas com facilidade e pouco código, de forma suscinta.
        const names = results.results.map((pessoa) => pessoa.name)

        console.log('names',names)
    }catch(error){
        console.error(`DEU RUIM`, error)
    }
}