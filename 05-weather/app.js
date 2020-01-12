const location = require('./location/location');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direction) => {
    try {
        const coords = await location.getLocationLatLng(direction);
        const temp = await weather.getWeather(coords.lat, coords.lng);    
        return `El clima de ${coords.direction} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${coords.direction}`;
    }
}

getInfo(argv.direction)
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err);
})