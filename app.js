require('colors');

const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {

    //console.clear();
    //console.log('Hola Mundo');
    let opt = '';
    const tareas = new Tareas();
    leerDB(tareas);

    do{
        //imprime menu
        opt = await inquirerMenu(); 
        //console.log(opt);

        switch (opt) {
            case '1':
                const descripcion = await leerInput('Descripción: ');
                tareas.crearTarea(descripcion);
            break;
            case '2':
                console.log(tareas.listadoArr);   
            break;
        
        }

        guardarDB( tareas.listadoArr );

        if(opt!= 0){
            console.lo
            await pausa();
        }
    }while( opt != 0)

 
}


main();