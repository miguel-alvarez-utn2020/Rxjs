import { from, fromEvent, map, sampleTime } from 'rxjs';


const click$ = fromEvent<PointerEvent >(document, 'click');



/**
 * es otro operador de temporización que se utiliza para 
 * controlar la frecuencia de emisión de valores en un Observable
 */
click$.pipe(
    //se emitira el ultimo valor despues de 2 segundo
    sampleTime(2000),
    map(({x,y})=> ({x,y}))
).subscribe(console.log)