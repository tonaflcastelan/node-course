// setTimeout(() => {
//     console.log('hola mundo')
// }, 3000);

let getUserById = (id, callback) => {
    let user = {
        name: 'Tonatiuh',
        id
    }

    if (id === 20) {
        callback(`El usaurio con id ${id} no existe en la base de datos`)
    } else {
        callback(null, user);
    }
}

getUserById(111, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', user);
});