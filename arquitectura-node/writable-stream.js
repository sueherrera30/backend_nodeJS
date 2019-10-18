// traemos a writable de nuestro modulo stream,  que es un modulo nativo de nodejs
const { Writable } = require('stream');

// lo instanciamos y el constructor usamos metodo write
// tiene tres parametros write: 1) chunk que son los pedazos de datos que nos llega cuando estamos escribiendo
// el encoding que es OPCIONAL que define la cofidicación 
// el 3ro es un callback

const writableStream = new Writable({
  write(chunk,encoding,callback) {
    console.log(chunk.toString());
  }
})
// llamamos a metodo callback para saber que ha finalizado
// es impirtante  que dene estar añadidos a un writable string 


// es la funcionalidad nativa que se encarga de leer los datos  LLAMANDO A a pipe y en el llamamos a wl writablestring
process.stdin.pipe(writableStream);
// este ejemplo solo lee datos y los imprime.
