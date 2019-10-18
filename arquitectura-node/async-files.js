// hacemos lo anterior de sync.file pero ahora de forma asincrona_

const fs = require('fs');
  const file = process.argv[2];
  // EL METODO CAMBIA A SOLO readfILE, por que por defecto node se refiere al  ASINCRONO
 // Primer parametro recibe archivo y segundo el callback
if(!file) {
  throw new Error('debes indicar el archivo que quieres leer');
}
  const content = fs.readFile(file, function(err, content) {
    if (err) {
      return console.log(err);
    }
    const lines = content.toString().split('\n').length;
    console.log(lines);
  });

