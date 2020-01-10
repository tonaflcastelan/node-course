const fs = require('fs');

let listadoTodo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTodo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar la información', err);
    });
}

const cargarDB = () => {
    try {
        listadoTodo = require('../db/data.json');    
    } catch (error) {
        listadoTodo = []   
    }
}

const getListado = (completado = null) => {
    cargarDB();
    let  isTrueSet;
    if (completado !== null) {
        isTrueSet = (completado === 'true');
    }
    if (completado !== null) {
        let filtroTodo = listadoTodo.filter(tarea => tarea.completado === isTrueSet);
        return listadoTodo = filtroTodo;
    }
    return listadoTodo;
}

const crear = (descripcion) => {
    cargarDB();
    let todo = {
        descripcion,
        completado: false
    }
    listadoTodo.push(todo);
    guardarDB();
    return todo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTodo.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTodo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoTodo = listadoTodo.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoTodo.length === nuevoTodo.length) {
        return false;
    } else {
        listadoTodo = nuevoTodo;
        guardarDB();
        return true;
    }
} 

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}