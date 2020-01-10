const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
}).argv;
const { crearArchivo } = require('./multiplicar/multiplicar');

console.log('limite', argv.limite);
return false;
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

crearArchivo(base)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch(err => console.log(err));