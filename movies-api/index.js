// requerimos express
const express = require('express');
// ejecutamos express para obtener app
const app =  express();
// traemos configuracion para no quemar nuestro puerto
const { config } = require('./config/index');
// con express podemos hacer manejo de rutas

// hacemos primera ruta
// cuando haceos un request a nuestra app, nos haga un hello world.
app.get('/', function(req,res) {
    res.send('que tranza prros ya llegueee');
});

// tambien podemos hacerlo con json,
// direcencia, ponenmos la ruta con json -- el metodo cambia en lugar de enviar  con send usamos .json
// dentro del metodo vamos a poner objeto de json con esa sintaxis.
app.get('/json', function(req,res) {
  res.json({ hello: 'world'})
});

//MANERA DE HACER RUTAS EN EXPRESS:
//1. usamos app( que es el llamado de express)
//2. pedimos con get- decidimos metodo. puede ser post tambien
//3. dentro le pasamos parametros que son,  la RUTA QUE QUEREMOS USAR
// y luego recibe funcion,

// escuchar puerto:
//call back donde especificamos donde se va a escuchar
// imprimimos dinamicamente el puerto que especifiquemos enarchivo de  las variables.
app.listen(config.port, function() {
  console.log(`terricola, escuchame desde el puerto http://localhost:${config.port}`);
});