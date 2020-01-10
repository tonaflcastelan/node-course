const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = todo.getListado(argv.completado);
        for (let tarea of listado) {
            console.log('======TODO======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================'.green);
        }
        break;
    case 'actualizar':
        let actualizar = todo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado)
        break;
    default:
        console.log('Comando no reconocido');
        break;
}