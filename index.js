/*
0- Obter um usuário
1- Obter o numero de telefone de um usuário a partir de seu ID
2- Obter o endereço do usuario pelo ID. 
*/

// o usuário retornará um objeto Promisse, que possui uma função que retorna um Callback (diz oq será feito quando resolver - valor, e quando houver erro - reject)
function obterusuario(callback){
    return new Promise (function resolvePromise(resolve, reject){
        setTimeout( function(){
            return resolve ({
                id: 1,
                nome: 'Yindi',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
}

function obterTelefone(idUsuario, callback ){
    setTimeout( () => {
        return callback(null, {
            telefone: '979162664',
            ddd:'21'
        })
    }, 2000);
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

const usuarioPromise = obterusuario()

//recebe o callback apenas com o resultado
usuarioPromise
    .then(function(resultado){
        console.log('resultado', resultado)
    })
    .catch(function(error){
        console.error('DEU RUIM', error)
    })