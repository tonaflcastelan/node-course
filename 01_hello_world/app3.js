console.log('Inicio del programa');

setTimeout(function() {
    console.log('primer timeout');
}, 3000);

setTimeout(function() {
    console.log('segudo timeout');
}, 0);

setTimeout(function() {
    console.log('tercero timeout');
}, 0);

console.log('fin de programa');