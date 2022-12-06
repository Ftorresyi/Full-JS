//Será implementado SYNC e AWAIT invés de PRIMISES
//São funções que iniciaram no C# e depois foram implementadas no JS
//Deve ser usado apenas quando necessário para evitar deixar o código lento ou pesado.


//Removemos as implementações das promises do código anterior e deixamos apenas as assinaturas das funções

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

// o usuário retornará um objeto Promisse, que possui uma função que retorna um Callback (diz oq será feito quando resolver - valor, e quando houver erro - reject)
function obterUsuario(usuario){
    return new Promise (function resolvePromise(resolve, reject){
        setTimeout( function(){
            //return reject(new Error('DEU RUIM DE VERDADE!'))
            return resolve ({
                id: 1,
                nome: 'Yindi',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout( () => {
            return resolve({
                telefone: '979162664',
                ddd:'21'
            })
        }, 2000);
    })
    
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'av sete',
            numero: 0
        })
    }, 2000);
}

//1° Passo: Adicionar a palavra async -> aumaticamente ela retornará um Promise
// A forma de manipular erro será via Try e Catch
main ()    //chama o método 
async function main (){
    try{
        console.time('medida-promisse') //mede o tempo de execução de um função - INICIO
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)

        //Melhor prática para DIMINUIR TEMPO DE EXECUÇÃO - USAR O PROMISE.ALL:
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promisse') ///mede o tempo de execução de um função - FIM
    }
    catch (error){
        console.error('DEU RUIM', error)
    }
}


/* Promises em JavaScript são uma das APIs mais poderosas e que nos auxiliam com operações assíncronas.

A Promise.all leva as operações assíncronas para um novo patamar, pois ajudam você a agregar um grupo de promises.

Em outras palavras, elas ajudam você a realizar operações concorrentes (às vezes, de graça).

O que é Promise.all?
Promise.all é, de fato, uma promise que recebe um array de promises como entrada (um iterável). Em seguida, ela é resolvida 
quando todas as promises são resolvidas ou quando qualquer uma delas é rejeitada.

Por exemplo, vamos supor que você tenha dez promises (operação assíncrona para realizar uma chamada à rede ou uma conexão com 
um banco de dados). Você precisa saber quando todas as promises forem resolvidas ou terá de esperar até que todas elas sejam resolvidas. 
Desse modo, você passa todas as promises para Promise.all. Depois, a própria Promise.all vira uma promise, que será resolvida quando todas 
as 10 promises forem resolvidas ou quando qualquer uma delas for rejeitada com um erro.

Vejamos isso no código:

Promise.all([Promise1, Promise2, Promise3])
 .then(result) => {
   console.log(result)
 })
 .catch(error => console.log(`Erro nas promises ${error}`))

Como você pode ver, estamos passando um array para Promise.all. Quando as três promises forem resolvidas, 
Promise.all resolve e o resultado é enviado para o console.
// Uma promise simples que se resolve após certo tempo
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Concluída em ${t}`)
    }, t)
  })
}

// Resolvendo uma promise normal.
timeOut(1000)
 .then(result => console.log(result)) // Concluída em 1000

// Promise.all
Promise.all([timeOut(1000), timeOut(2000)])
 .then(result => console.log(result)) // ["Concluída em 1000", "Concluída em 2000"]
No exemplo acima, Promise.all resolve após 2000 ms e o resultado é exibido no console como um array.

Algo interessante sobre Promise.all é o fato de que a ordem das promises é mantida. A primeira promise no array será resolvida 
como o primeiro elemento do array resultante, a segunda promise será o segundo elemento do array resultante e assim por diante.

Fonte: https://www.freecodecamp.org/portuguese/news/tudo-o-que-voce-precisa-saber-sobre-promise-all/
*/