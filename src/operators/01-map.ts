import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Emite 5 valores del 1 a 5, dichos valores pasan por el map y los transforma
 * al el valor * 10 y lo emite
 * Version no tipada del map
 */
range(1, 5)
.pipe(
    map(value => value * 10)
)
.subscribe(value => console.log(value));
/**
 * version tipada.
 * Se debera especificar en el map que entre y que sale
 * <numeber, number>, <que entra, que sale> 
 */
range(1, 5)
.pipe(
    map<number, number>(value => value * 2)
)
.subscribe(value => console.log(value));

/**
 * version tipada.
 * Se debera especificar en el map que entre y que sale
 * <numeber, number>, <que entra, que sale> 
 */
range(1, 5)
.pipe(
    map<number, string>(value => (value * 2).toString())
)
.subscribe(value => console.log(value));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');



keyup$
.pipe(
    map<KeyboardEvent, string>(event => event.code)
)
.subscribe(value => console.log(value));