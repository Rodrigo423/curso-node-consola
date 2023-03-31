const Tarea = require('./tarea');
require('colors');

class Tareas{

    _listado = {};

    get listadoArr(){
        const listado  = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    constructor(){
        this._listado = {}
    }

    borrarTarea(index){

        delete this._listado[this.listadoArr[index].id];
        this.listadoArr.splice(index,1);
    }

    crearTarea( desc='' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas ){

        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea;
        });
        
    }

    listadoCompleto(){
        let i = 1;
        this.listadoArr.forEach(tarea => {
            
            
            let toPrint = '';
            const state = (tarea.completadoEn !== null) ? 'Completada'.green : 'Pendiente'.red;  

            toPrint = toPrint+i.toString().green+'. '+tarea.desc+' :: '+state;

            console.log("");
            console.log(toPrint);
            
            i++;
        });

    }

    listarPendientesCompletadas(flagCompletadas = true){
        let i = 1;
        this.listadoArr.forEach(tarea => {
            
            if(flagCompletadas){
                if(tarea.completadoEn == null){
                    return; 
                }
            }else{
                if(tarea.completadoEn !== null){
                    return; 
                }
            }

            
            let toPrint = '';
            const state = (tarea.completadoEn !== null) ? 'Completada'.green : 'Pendiente'.red;  

            toPrint = toPrint+i.toString().green+'. '+tarea.desc+' :: '+state;

            console.log("");
            console.log(toPrint);
            
            i++;
        });


    }

}

module.exports = Tareas;