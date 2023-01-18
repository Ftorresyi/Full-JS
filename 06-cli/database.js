const {
    readFile
} = require('fs') //fs = file system

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile) //Para trabalhar com Promisses dentro do arquivo JS

//const path = require('path')

class Database{
    constructor(){
        this.NOME_ARQUIVO = './herois.json'
    }
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString()) //converte o arquivo para string e para JSON
    }
    escreverArquivo(){

    }
    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item=> (item ? (item.id===id): true)) // ? indica que se o id for diferente de null, undefined ou zero vai ser o usado o item.id
        //O ':true' informa que se não for para nenhum id, a função irá trazer a lista completa, porém se passar id, será lista o id específico
        return null
    }
}

module.exports = new Database() //torna visivel os metodos e funções para outros arquivos através do ponto, sem que precisem ser instanciados