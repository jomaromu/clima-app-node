// importo axios
const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a6643122eb38440b9486ba27e737cf78&units=metric`);

    return resp.data.main.temp;
}

module.exports = {

    getClima,
}