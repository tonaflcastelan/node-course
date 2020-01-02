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

let getEmpleado = async (id) => {
    
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {
    
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let response = await getSalario(empleado);
    return `${response.nombre} tiene un salario de $${response.salario}`;
}

getInformacion(10)
.then(response => console.log(response))
.catch(err => console.log(err));