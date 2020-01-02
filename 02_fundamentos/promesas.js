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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    });
}

getEmpleado(4).then(empleado => {
    return getSalario(empleado);
})
.then(response => {
    console.log(`El salario de ${response.nombre} es de ${response.salario}`)
})
.catch(err => {
    console.log(err);
});

// getEmpleado(1).then(empleado => {
//     console.log('Empleado de BD', empleado);
//     getSalario(empleado).then(response => {
//         console.log(`El salario de ${response.nombre} es de ${response.salario}`)
//     }, (err) => console.log(err));
// }, (err) => console.log(err));