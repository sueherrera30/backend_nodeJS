// util para manipular archivos.

const fs = require('fs');

//archivo original, segundo arametro archivo al copiare.
fs.copyFile('cancion.txt', 'rolita.js', err => { 
  if(err) {
    console.log(err)
  }
  console.log('archivo fue copiado')
})

