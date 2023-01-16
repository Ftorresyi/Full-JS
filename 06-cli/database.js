const {
    readFile
} = require('fs') //fs = file system

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile) //Para trabalhar com Promisses dentro do arquivo JS

const path = require('path')

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())

    }
    escreverArquivo(){

    }
    listar(){
        return null
    }
}

module.exports = new Database() //torna visivel os metodos e funções para outros arquivos através do ponto, sem que precisem ser instanciados