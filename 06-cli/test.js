const {
    deepEqual, ok
} = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder:'Speed',
    id:1
}

//Aqui vamos descreve o teste de código que ira compara as informações do banco de dados (herois.json) com os dados cadastrados na cons DEFAULT_ITEM_CADASTRAR

describe ('Suite de manipulacao de Herois', () => { //() é uma função anonima e => é aerofunction

    it (  'deve inicializar o objeto Herois (PESQUISAR), usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
        
    })
})