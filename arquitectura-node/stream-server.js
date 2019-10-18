// para soluconar el problema de memoria que tenemos, hacemos otro servidor.
// leer nuestro archivo como string:

//.pipe nos ayuda a integrar un writeable string ,
// el response object patambien es un string y podemos pasarlo

const fs = require('fs');

const server = require("http").createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream('./big')
  fs.readFile("./big", (err, data) => {
    src.pipe(res);
  });
});

server.listen(3000);

