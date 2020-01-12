const axios = require('axios');

const getWeather = async (lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fef21f52b272508e3ed6ecb13e6032c4&units=metric`);
    return response.data.main.temp;
}

module.exports = {
    getWeather
}