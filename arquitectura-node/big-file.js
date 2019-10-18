// crea archivo que pese mucho
// usamos file system, me ayuda a leer archivos
const fs =require('fs');
const file = fs.createWriteStream('./big');

for(let i= 0; i<= 1e6; i++){
  file.write(
    'La felicidad llega sin llamar a la puerta, al margen de las situaciones y circunstancias que la rodean a una, con una independencia casi cruel. No importa en qué situación te halles o con quién estés.'
  );
}

file.end();
//ls -lh: nos dice cuanto pesa.
