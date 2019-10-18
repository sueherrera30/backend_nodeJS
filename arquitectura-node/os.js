const os = require('os');

// que potencia tiene cpu
// console.log('CPU info', os.cpus());
// saber mi ip
//console.log('ip adress', os.networkInterfaces().en0.map(i => i.address));
// cuanta memoria tengo libre 
//console.log('free memory', os.freemem());
//que tipo de sistem operativo tenemos
console.log('tipo de sistema operativo', os.release());
//imprimir informacion del usuario
console.log('user info', os.userInfo());

//console.log()
