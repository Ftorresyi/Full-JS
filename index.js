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
async function main (){
    try{
        const usuario = await obterUsuario()
        const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id)
    }
    catch (error){
        console.error('DEU RUIM', error)
    }
}