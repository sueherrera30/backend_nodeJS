 // nos ayuda a implementar ambas interfaces, no usar read y writeable por aparte
// sino que las dos al mismo tiempo 
const { Duplex } = require('stream');

//instanciamos la clase, el constructor recibe write y read: 
const duplex = new Duplex({
  // el metodo write recibe al chunk que son los datos como parametro,
  // de forma opcional recibe encoding  y el callback.
  write(chunk,encoding,callback) {
    // logueamos nuestro pedazo de dato transformado a string, ya que viene como
   //  tipo buffer y se ebe de leer
    console.log(chunk.toString());
    //llamamos callback:
    callback();
  },
  read(size) {
    // condicionamos a ultimo caracter que es z con valor 90.
    if(this.currentChatCode > 90) {
      // push de null asi sabemos que  esta leyendo.
      this.push(null);
      // buena practica hacer return para que codigo no se ejecute apartir de ahi.
      return;
    }
    this.push(String.fromCharCode(this.currentCharCode++));
  }
});
// inicializamos:
duplex.currentCharCode = 65;
process.stdin.pipe(duplex).pipe(process.stdout);