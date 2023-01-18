//TESTANDO A LIB pdf2json

var fs=require('fs'); //importa a lib file system
var PDFParser=require('pdf2json'); //importa pdf parser da lib pdf2json


var pdfCaminho = 'pdf-com-forms.pdf';

//Apartir daqui adicionar a programação que vai ser executada depois que o arquivo for lido:
//Esse bloco de código carrega para leitura o pdf e testa se o arquivo existe no diretório indicado:
if (fs.existsSync(pdfCaminho)) {
    var pdfParser = new PDFParser();
    pdfParser.on("DEU ERRO NA LEITURA DO PDF", function (errData) { // Caso haja um erro na leitura do arquivo, retornará ERRO
       console.error(errData.parserError)
    });
    pdfParser.on("pdfParser_dataReady", function (pdfData) { //Se não houver erros na leitura do pdf
    console.log(pdfData)
    });
    pdfParser.loadPDF(pdfCaminho); //carregue o arquivo pdf para leitura, de acordo com o caminho definido (pdfCaminho)
    //Apartir daqui, execute o código que quiser:
    console.log('Arquivo localizado');
  } else {
    console.log('Arquivo NÃO localizado');
  }

//No seu console, você deve ver um objeto JSON contendo todos os elementos do arquivo PDF.
//A estrutura do objeto de resposta tem muitos detalhes, segue abaixo um resumo:
// 1- Todo o conteudo está dentro de formImage  
// 2- Dentro de formImage, vai existir um array chamado Pages, com os elementos de cada página.  
// 3- Dentro de Pages, vai existir um array chamado Texts, onde você vai ter partes do texto. 
//O parser pode quebrar uma mesma linha em várias partes. 
//Você vai ter a posição "x" e "y" daquele trecho de texto dentro da página.
// 4- Para cada elemento dentro de Texts, vai existir um array de resultados chamado R.
// 5- - Por último, cada elemento "R" vai ter uma propriedade chamada "T", com o texto.
//console.log(pdfData.formImage.Pages[0].Texts[0].R[0].T); //pega o primeiro texto que o parser conseguiu localizar na primeira página
//O retorno possui vários arrays, então para acessar todo o conteúdo teremos que iterar três arrays. 
//Para ler o conteúdo de cada array, pode se utilizar o forEach, ou outra estrutura de iteração de loop, como o for in, for on, for of, ou map.

pdfParser.on("pdfParser_dataReady", function (pdfData) {
   pdfData.formImage.Pages.forEach(function(page, index) { 
   page.Texts.forEach(function(text, index) { 
   text.R.forEach(function(t) { 
   //console.log(pdfData.formImage.Pages[0].Texts[0].R[0].T); // Cada Pages[] possui um array chamado Texts
   console.log(pdfData.formImage.Pages[6].Texts) //Reparei que ao rodar essa linha é impresso a mesma informação da posição dos textos diversas vezes e não entendi porquê.
   fs.writeFile("./forms.fields.json", JSON.stringify(pdfParser.getAllFieldsTypes()), ()=>{console.log("Done.");});
   //console.log(t.T);
   });
   });
   });
});

//console.log(pdfData.formImage.Pages[0].Texts[1]) mostra a posição de cada elemento R que possui um texto T dentro dele,
//Ele mostra um resultado na tela da forma a seguir para cada elemento Texts dentro da Page 0:
//Pode-se ver que R é um array, onde a chave "T" recebe a segunda linha do arquivo
/* {
  x: 5.068,
  y: 5.1,
  w: 546.805,
  sw: 0.29428125,
  clr: 0,
  A: 'left',
  R: [
    {
      T: 'EXERC%C3%8DCIOS%20RESOLVIDOS%20DE%20JAVASCRIPT%20',
      S: -1,
      TS: [Array]
    }
  ]
}*/


//Podemos salvar os dados lido do  PDF em um arquivo HTML para facilitar a visualização dos dados parseados
//Esse trecho de código coloca todas as palavras do pdf uma ao lado da outra, removendo todos os espaços vazios e imagens, exceto o espaço entre uma palavra e outra
pdfParser.on("pdfParser_dataReady", function (pdfData) {
    var retornoHtml = "";

    pdfData.formImage.Pages.forEach(function(page, index) { 
        retornoHtml += "Pagina " + (parseInt(index) + 1) + "";
        var y = 0;

        page.Texts.forEach(function(text, index) { 
            if (index == 0){
                y = text.y;
            }	
        
        text.R.forEach(function(t) { 
            if (text.y !== y){
                retornoHtml += "";
            }
            retornoHtml += decodeURIComponent(t.T);
        });

        y = text.y;
    });
    retornoHtml += "";
 });

fs.writeFile("resultado.html", retornoHtml, function(err) {
    if(err) {
        return console.log(err);
    }
});

});



/* //https://github.com/modesty/pdf2json

//Parseando pdf com formulário

//Analisa um PDF e escreva um arquivo fields.json que contenha apenas informações de campos de formulários interativos:
var fs=require('fs'); //importa a lib file system
var PDFParser=require('pdf2json'); //importa pdf parser da lib pdf2json


var pdfCaminho = 'pdf-com-forms.pdf';

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./forms.fields.json", JSON.stringify(pdfParser.getAllFieldsTypes()), ()=>{console.log("Done.");});
});

pdfParser.loadPDF("./pdf-com-forms.pdf");

 */