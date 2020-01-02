let empleados  = [
    {
        id: 1,
        nombre: 'Tonatiuh'
    },
    {
        id: 2,
        nombre: 'Cecicilia'
    },
    {
        id: 3,
        nombre: 'Karla'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        })
    }
}

getEmpleado(3, (err, object) => {
    if (err) {
        return console.log(err);
    }
    getSalario(object, (err, response) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${response.nombre} es de $${response.salario}`);
    });
});