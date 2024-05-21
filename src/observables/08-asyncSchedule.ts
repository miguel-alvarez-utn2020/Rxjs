import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`hola ${nombre}`)

//Comportamiendo de setTimeOut pero con mas contro
asyncScheduler.schedule(saludar, 2000);

//Con funciones que llavar parametros, el tercer argumento espera el state,
//el cual es un solo argumento, en caso de tener mas data para mandar en la funcion
//saluda2 debera ser un objeto o un array etc...
asyncScheduler.schedule(saludar2, 4000, 'Miguel');

//compotamiento del interval
asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1, 1000);//cuando el estado cambia el schedule vuelve a emitir el valor


}, 6000, 0)//en cuanto tiempo empieza a emitir y el estado inicio