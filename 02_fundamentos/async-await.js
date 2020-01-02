// let getNombre = async() => {
//     return 'Tonatiuh';
// }

// getNombre().then(nombre => {
//     console.log(nombre);
// })
// .catch(err => {
//     console.log('Error de async', err);
// })

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tona');
        }, 3000);
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}
saludo().then(mensaje => {
    console.log(mensaje);
})