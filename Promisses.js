/*
0- Obter um usuário
1- Obter o numero de telefone de um usuário a partir de seu ID
2- Obter o endereço do usuario pelo ID. 
*/
// importamos um módulo interno do Node.JS que faz a manipulação de Promises
//Ele é basicamente usado para converter um método que retorna respostas usando uma função de retorno
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

// o usuário retornará um objeto Promisse, que possui uma função que retorna um Callback (diz oq será feito quando resolver - valor, e quando houver erro - reject)
function obterusuario(usuario){
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

// para manipular o sucesso usamos a função .then()
// para manipular erros, usamos o .catch()
//usuario -> telefone -> telefone
const usuarioPromise = obterusuario()

//recebe o callback apenas com o resultado
usuarioPromise
    .then(function(usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    //esse .then recebe resultado do .then anterior. Fará isso para obter endereço da promise do NodeJS (obterEnderecoAsync)
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        //return endereco;
        return endereco.then(function resolverEndereco(result){
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    //Se a função acima der erro cairá no cairá no .catch abaixo
    .catch(function(error){
        console.error('DEU RUIM', error)
    })
    
    /* PROMISEFY:
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