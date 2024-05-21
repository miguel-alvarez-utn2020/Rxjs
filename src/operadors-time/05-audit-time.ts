import { from, fromEvent, map, sampleTime } from 'rxjs';
import { auditTime, tap } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent >(document, 'click');



/**
 * se utiliza para emitir el valor más reciente de una secuencia 
 * observable a intervalos de tiempo específicos.
 */
click$.pipe(
    map(({x})=> ({x})),
    tap((rep) => console.log(rep) ),
    auditTime(5000),
).subscribe(console.log)