/*
0- Obter um usuário
1- Obter o numero de telefone de um usuário a partir de seu ID
2- Obter o endereço do usuario pelo ID. 
*/

//escrevendo funções que retornam callbacks

function obterusuario(callback){
    /* funcao setTimeout simula o retorno da chamada para um BD */
    setTimeout( function(){
        return callback(null, {
            id: 1,
            nome: 'Yindi',
            dataNascimento: new Date()
        })
    }, 1000)
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

/* Tudo oq é executado em segundo plano, precisa de uma função,
para que essa função seja chamada quando terminar a execução.
Se for criada uma constante usuario=ObterUsuario() diretamente,
o resultado será usuario undefined, pois o node não conseguirá
acessar o valor do usuario. Isso pq ele resolve tarefas assíncronas,
ou seja com tempos de resolução diferentes. 
Assim, a função obterUsuario é invocada corretamente, mas ao fazer a 
chamada de tempo de espera, ele “pausa a execução” deste método e continua
a execução de operações menos custosas à aplicação e somente ao fim 
retorna o valor ao ponto definido. 
Para resolver isso criamos a função resolverUsuario passamos uma função de
callback em ObterUsuario() como argumento do método para sincronizar 
o retorno da função. 
 */

function resolverUsuario(error, usuario) {

    console.log('usuario', usuario)
}

//Dessa forma o usuario só será chamado através de resolverUsuario() quando obterUsuario() terminar o retorno do dado
//IMPLEMENTANDO AS CALLBACKS:
obterusuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false . Se o valor do dado retornado for false, cairá nas consiçoes de error dos if.
    if (error){
        console.error('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if (error1){
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }
    })
        obterEndereco(usuario.id, function resolverEndereco(error2, endereço){
            if (error2){
                console.error('DEU RUIM em ENDERECO', error2)
                return;
            }
        })
            // para printar na tela do usuario se usa a crase
            console.log(`  
            Nome: ${usuario.nome},
            Endereco: ${endereço.rua}, ${endereço.numero}
            Telefone: ${telefone.ddd}${telefone.telefone}
            `)
        
    })


//const telefone = obterTelefone(usuario.id)


//console.log('telefone', telefone)
