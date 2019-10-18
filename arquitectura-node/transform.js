const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding,callback) {
      // el string que recibe se pasa a uppercase, etransform tiene todas las propidades de ambos metodos funcionan.
     // recibo mi chunk de info  y como es buffer a string.
      this.push(chunk.toString().toUpperCase());
      callback();
    }
});
//oye process vamos a recibir esta string.
process.stdin.pipe(transformStream).pipe(process.stdout);