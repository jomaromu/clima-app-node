// importo axios
const axios = require('axios');

const getLugarLatLng = async(dir /*direccion del argv*/ ) => {

    // convertir a encodeURL
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '9c12d7f8d9msh5ef683218c7da39p1354b4jsn13a47d50e11e' }
    });

    // recibir la respuesta
    const resp = await instance.get();

    // manejar el error
    if (resp.data.Results.lenght === 0) {

        throw new Error(`No hay resultado para: ${dir}`);

    }

    if (resp.data.Results[0] === undefined) {

        throw new Error(`No se puede determinar el clima para el sitio: ${dir}`);
    }

    // crear los datos del objeto con la resp
    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    // .then(resp => {
    //     console.log(resp.data.Results[0]);
    // })
    // .catch(err => {
    //     console.log('Error: ', err);
    // });

    // retorno un objeto con los datos que necesito mostrar
    return {

        direccion,
        lat,
        lng
    }
}

module.exports = {

    getLugarLatLng,
}