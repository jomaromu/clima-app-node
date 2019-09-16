// importar lugar.js
const lugar = require('./lugar/lugar');

// importar clima
const clima = require('./clima/clima');

// creo los argumentos del yargs
const argv = require('yargs').options({

    direccion: {

        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el  clima',
        demand: true
    }

}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then();

// clima.getClima(0.750000, -74.000000)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });

// muestro el sitio con su clima
const getInfo = async(direccion) => {

    try {

        const sitio = await lugar.getLugarLatLng(direccion);

        // si no hay ningun sitio
        const nombreSitio = sitio.direccion;
        const latSitio = sitio.lat;
        const lngSitio = sitio.lng;


        const temp = await clima.getClima(latSitio, lngSitio);

        return `${nombreSitio} tiene una temperatura de: ${temp} grados celcius`;

    } catch (e) {

        return `No se pudo determinar el clima`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(`No se pudo determinar el clima de: ${argv.direccion}`)