const fs = require('fs');
// pasamos como parametro a recursive para que si no existe lo pueda crear
// esta ruta indica l oque queremos crear y donde 

//
fs.mkdir('platzi/escuela-js/node',{recursive: true }, err => {
  if(err) {
    return console.log(err)
  }
})
// nos crea archivos, 
// usar ruta relativa , la absoluta con palito,