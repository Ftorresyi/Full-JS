/* Trabalhar com a interação do usuário é tratada por meio de eventos: cliques do mouse, pressionamentos de botões 
do teclado, reação aos movimentos do mouse e assim por diante.
No lado do back-end, o Node.js nos oferece a opção de construir um sistema semelhante usando omódulodeeventos.
Este módulo, em particular, oferece a classe, que usaremos para lidar com nossos eventos: EventEmitter
Métodos mais usados com a Classe 'events':
.on()-> adiciona uma função de retorno de chamada que será executada quando o evento for acionado
.emit()->  dispara um evento
.once()-> adiciona um ouvinte único
.removeListener() / off()-> remove um ouvinte de eventos de um evento
removeAllListeners()-> remove todos os ouvintes de um evento
*/

const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter{

}

const meuEmissor = new MyEmitter()
const nomeEvento = 'usuario:click' //manipulador de eventos

//Cria um OBSERVADOR. Qualquer alteração nesse evento de click retornará um resultado
meuEmissor.on(nomeEvento, function (click){
    console.log('Um usuario clicou', click)
})

//Simular que o usuario CLICKOU:
meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no OK')

let count = 0
setInterval(function(){
    meuEmissor.emit(nomeEvento, 'no OK' + (count++))
}, 1000)

/* const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event'); */