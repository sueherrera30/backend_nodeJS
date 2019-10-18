// las utilidades en node puedes funcionar de manera sincrona y asincrona.
// asincrona no bloqueara el proceso y seguira mientras que sincrono ira uno por uno -
// cuando usamos node  de manera asincrona se recomienda usar callbacks,
// usando try y catch.

const fs = require('fs');

try {
  // leemos archivo lo que pasamos por la terminal con el vector
// indicamos que posicion del comando leemos. 0 es node 1 el archivo a ejecutar y 2 es el archivo a leer

  const file = process.argv[2];
  const content = fs.readFileSync(file).toString();
  const lines = content.split('\n').length;
  console.log(lines);
} catch(err) {
  console.log(err);
}

// OJO: al correr debemos especificar que rchivo vamos a leer.
//  node archivoejecutar.js arcivoleer.txt

// dice como resultado que eltexto tiene 24 lineas.

