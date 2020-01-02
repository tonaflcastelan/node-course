const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '1';

crearArchivo(base)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch(err => console.log(err));