//http://devfuria.com.br/nodejs/old/simples-assert-com-nodejs/#:~:text=O%20Node.js%20possui%20o%20m%C3%B3dulo%20assert%2C%20com%20ele,e%20desigualdades%3A%20assert.equal%20%28actual%2C%20expected%20%20%20message%5D%29
//https://nodejs.org/api/assert.html
//assert é uma ferramenta simples para fazer testes, pois ele testa igualdades e desigualdades

const assert = require('assert')

const {obterPessoas} = require('./service')


//descrever qual será a api de testes:
describe('Star Wars Tests', function () {
    it('Deve buscar o R2-D2 com o formato correto', async () => {
        const expected = [{
            nome: 'R2-D2', 
            peso: '96'
        }]
        const nomeBase = `r2-d2`

        const resultado = await obterPessoas(nomeBase)
        assert.deepStrictEqual(resultado, expected)
    })
})