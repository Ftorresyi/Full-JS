//TESTANDO A LIB PDF-LIB
//by https://pdf-lib.js.org/#install

const { PDFDocument } = require ('pdf-lib')
const fs=require('fs'); //importa a lib file system

const formPdfBytes = fs.open('./pdf-com-forms.pdf', (err, data) => {
    console.log('O arquivo foi lido pelo FS',data)
})


async function fillForm() {
  //const formUrl = 'https://drive.google.com/file/d/1eqTHbikquDGTy1-ue88CgKakM2WBVv3v/view?usp=share_link'
  //const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(formPdfBytes)
  console.log(pdfDoc)
  const form = pdfDoc.getForm()

  const clausulaVII = form.getTextField('VII - Dados do Fornecedor do Bem')
  const razaoSocial = form.getTextField('1 - Nome Completo/Razão Social')

  //const characterImageField = form.getButton('CHARACTER IMAGE')

  clausulaVII.setText('Diogo')
  razaoSocial.setText('Surf Adventure')
  
  const pdfBytes = await pdfDoc.save()
  const formPdfBytes = fs.writeFile('./pdf-atualizado.pdf', (err, data) => {
    console.log('O arquivo foi salvo pelo FS',data)
  })

  //factionImageField.setImage(emblemImage)

  /* backstoryField.setText(
    [
      `Mario is a fictional character in the Mario video game franchise, `,
      `owned by Nintendo and created by Japanese video game designer Shigeru `,
      `Miyamoto. Serving as the company's mascot and the eponymous `,
      `protagonist of the series, Mario has appeared in over 200 video games `,
      `since his creation. Depicted as a short, pudgy, Italian plumber who `,
      `resides in the Mushroom Kingdom, his adventures generally center `,
      `upon rescuing Princess Peach from the Koopa villain Bowser. His `,
      `younger brother and sidekick is Luigi.`,
    ].join('\n'),
  ) */

  
}
