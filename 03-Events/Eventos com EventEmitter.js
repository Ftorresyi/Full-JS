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
import process from 'node:process';

const meuEmissor = new MyEmitter()
const nomeEvento = 'usuario:click' //manipulador de eventos

//Cria um OBSERVADOR. Qualquer alteração nesse evento de click retornará um resultado
meuEmissor.on(nomeEvento, function (click){
    console.log('Um usuario clicou', click)
})

//Simular que o usuario CLICKOU:
/* meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no OK')

let count = 0
setInterval(function(){
    meuEmissor.emit(nomeEvento, 'no OK' + (count++))
}, 1000) */

const stdin = process.openStdin()
stdin.addListener('data', function(value)){
  console.log(`Voce digitou: ${value.toString().trim()}`)
}



/* process.openStdin :
A propriedade process.stdin é uma interface de programação de aplicativo embutida do módulo 
de processo que escuta a entrada do usuário. A propriedade stdin do objeto de processo é um fluxo legível. 
Ele usa a função on() para ouvir o evento.

Sintaxe:

process.stdin.on();
Valor de retorno: não retorna nenhum valor. 

.process é uma instância de EventEmitter, e é usado para manipular eventos.
Para saber mais sobre os Processos que o NodeJS realiza, checar a documentação:
https://nodejs.org/api/process.html
*/