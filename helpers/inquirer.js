const inquirer = require ('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {

    console.clear();
    console.log('=================='.green);
    console.log(' Seleccione una opcion'.white);
    console.log('==================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;

}

const pausa = async() => {

    const optPausa = {
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'ENTER'.green} para continuar\n`
    }

    const {opcion} = await inquirer.prompt(optPausa);

    return true;
} 

const leerInput = async(message)=>{
    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);

    return ok;

}
const borrarMenu = async(tareas) => {

    let listadoTareas = [];

    let i = 0;
    tareas.listadoArr.forEach(tarea => {
            
        listadoTareas.push(
            {
                value: i.toString(),
                name: `${(i+1).toString().green} ${tarea.desc}`
            }
        );

        i++;
    });

    if(listadoTareas.length < 1){
        return false;
    }

    let menuTareas = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Lista de Tareas: ',
            choices: listadoTareas
        }
    ];

    console.clear();
    console.log('=================='.green);
    console.log(' Seleccione la opción a eliminar'.white);
    console.log('==================\n'.green);

    const {opcion} = await inquirer.prompt(menuTareas);

    return +opcion;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    borrarMenu,
    confirmar
}