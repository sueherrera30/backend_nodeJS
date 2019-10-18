
const http = require('http');
const server = http.createServer();

 server.on('request',(req,res) => {
 // simplificamos el codigo:
  if(req.method === 'POST' && req.url == '/echo'){
    // el objeto request es un getablestring, hereda y tambien puede tener eventos.
    // evento se va a llamar al recibir datos.
    // con callback vamos metiendo el codigo que vamos recogiendo
    let body = [];

    req
    .on('data',chunk => {
      body.push(chunk)
    })
    .on('end',() => {
      res.writeHead(200, {'Content-type': 'text/plain'})
      body = Buffer.concat(body).toString();
      // buffer,almacenas cosas que no se pueden procesar.
      res.end(body);
    })
  } else {
    res.statusCode = 404;
    res.end()
  }
 });
// ojo, no podemos acceder a la url directamente por que es post, asi que usamos 
// postman - rcuerda poner al final de url / echo 

 server.listen(8001);
 console.log('servidor en la url http://localhost:8001');
