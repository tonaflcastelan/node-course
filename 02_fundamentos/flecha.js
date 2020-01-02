// Forma tradicional
// function sumar(a, b) {
//     return a + b;
// }

// Primer forma
// let sumar = (a, b) => {
//     return a + b;
// }

// Segunda forma
// let sumar = (a, b) => a + b;

// let saludar = () => 'Hola mundo';

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// let saludar = nombre => `Hola ${nombre}`;

// console.log(sumar(10, 20));
// console.log(saludar('Tona'));


let flash = {
    name: 'Wally',
    last_name: 'West',
    power: 'super speed',
    getName() {
        return `${this.name} ${this.last_name} - poder ${this.power}`
    }
};

console.log(flash.getName())