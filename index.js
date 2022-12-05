//Será implementado SYNC e AWAIT invés de PRIMISES
//São funções que iniciaram no C# e depois foram implementadas no JS
//Deve ser usado apenas quando necessário para evitar deixar o código lento ou pesado.


//Removemos as implementações das promises do código anterior e deixamos apenas as assinaturas das funções
//Ele é basicamente usado para converter um método que retorna respostas usando uma função de retorno
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

/* PROMOISEFY:
O métodoutil.promisify()define no módulo utilitários da biblioteca padrão Node.js. 
Ele é basicamente usado para converter um método que retorna respostas usando uma função de retorno 
de chamada para retornar respostas em um objeto promise. Normalmente, muito em breve, torna-se muito 
difícil trabalhar com retornos de chamada devido ao aninhamento de retorno de chamada ou infernos de retorno de chamada. 
Torna-se muito difícil organizar ou formatar nosso código para que outros desenvolvedores, se estiverem trabalhando com esse código, 
possam entendê-lo facilmente. Por outro lado, é muito fácil lidar com promessas, pois as promessas de aninhamento também são operadas em estilo linear, 
ou seja, encadeamento de promessas. O método util.promisify() faz isso por nós e faz com que o método opere com promessas. 
Sintaxe:

util.promisify(func)
Parâmetros: Esse método aceita umfuncde parâmetro único que contém a função baseada em retorno de chamada.

Valor de retorno: Esse método retorna uma função baseada em promessa.*/