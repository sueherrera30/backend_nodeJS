const fs = require('fs');

// podemos leer los archivos que estan dentro del directorio

// promer parametro que recibe es el path, a donde voy a leer 
//palabra clave es dir name , segundo parametro un callback

const files = fs.readdir(__dirname, (err,files) => {
  if(err) {
    return console.log("ñeee ya te equivocaste");
  }
  console.log(files);
})