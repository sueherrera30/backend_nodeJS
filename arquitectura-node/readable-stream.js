const { Readable } = require('stream');
const readableStream = new Readable();

readableStream.push(`${0/0}`.repeat(10).concat(' Batmaaaaaaa!!!'));
// asi sabe qeu dejo de recibir datos 
readableStream.push(null);

// funcionalidad por defecto que imprime en la consola
readableStream.pipe(process.stdout);