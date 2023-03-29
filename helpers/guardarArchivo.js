const fs = require('fs');
const Tareas = require('./../models/tareas');

const archivo = './db/data.json';

const guardarDB = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data));
    
} 

const leerDB = (tareas) => {

    if( !fs.existsSync(archivo) ){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'} );
    const data = JSON.parse( info );

    tareas.cargarTareasFromArray(data);
    return true;
}

module.exports = {
    guardarDB,
    leerDB
}