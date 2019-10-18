// 1. traemos a http que es un modulo nativo de nodeJS
const http = require('http');
// 2. creamos un servidor mediante  el metodo http create server y lo guardamos en una variable.
const server = http.createServer();

// implementación:

//el servidor funciona con eventos:

// aqui, en el evento request, se va a ejecutar el código, justo
//cuando se haga una petición a este servidor.

// al llamar al metodo, pasamos como parametro el nombre del evento y una función.
// la función que llama, a su vez tendra como parametros un REQUEST object (es lo que llega de la petición )
 // y un RESPONSE object (es lo que le vamos a dar, responder al cliente.)
 
 server.on('request',(req,res) => {
// le definifimos in status code a la respuesta donde todo esta ok.
  res.statusCode = 200;
  // definimos en header que tipo de respuesta vamos a recibir:
  res.setHeader('Content-Type','text/plain');
 // respondemos al cliente:
 // \n nos permite agregar un espacio.
  res.end('hello world\n');
 });

 // agremos el puerto donde será escuchado:
 server.listen(8000);
 // agregamos informacion de referencia indicando donde se escuchará.
 console.log('servidor en la url http://localhost:8000');

 //ejecutamos con:
 // node server.js
