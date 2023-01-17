//https://github.com/modesty/pdf2json

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