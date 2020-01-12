const axios = require('axios');

const getLocationLatLng = async (dir) => {
    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '062cfc7bccmsh28eb6494833dba8p1cc028jsn5ab31a4160dc'}
    });

    const response = await instance.get();
    const data = response.data.Results[0];

    if (data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const direction = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direction, lat, lng
    }
}

module.exports = {
    getLocationLatLng
}