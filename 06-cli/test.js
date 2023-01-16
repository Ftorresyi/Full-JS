const {
    deepEqual, ok
} = require('assert');

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder:'Speed',
    id:1
}

describe ('Suite de manipulacao de Herois', () => { //() é uma função anonima e => é aerofunction

    it (  'deve inicializar o objeto Herois (PESQUISAR), usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR
        //
        ok(null, expected)
        
    })
})