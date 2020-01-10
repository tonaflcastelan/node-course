const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendientre la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el etsado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        completado: {
            default: null,
            alias: 'c',
            desc: 'Marca como completado o pendientre la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}