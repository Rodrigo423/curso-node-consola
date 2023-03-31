require('colors');

const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput,
        borrarMenu,
        confirmar } = require('./helpers/inquirer');
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
                tareas.listadoCompleto();   
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);   
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);   
            break;
            case '6':

                const indexTareaBorrar = await borrarMenu(tareas);

                if(indexTareaBorrar === false){
                    console.log('No existen tareas a borrar');
                    break;
                }

                const confirmaOk = await confirmar('¿Está seguro que desea eliminar esta opción?')
                if(confirmaOk){
                    const res = tareas.borrarTarea(indexTareaBorrar);   
                    console.log('Tarea Borrada');
                }

                //pausa();
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