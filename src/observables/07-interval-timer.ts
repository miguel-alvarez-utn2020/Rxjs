import { timer, interval, Observer } from 'rxjs'

const observer: Observer<number> = {
    next: (val) => console.log('Value', val),
    error: null,
    complete: () => console.log('Complete')
}


const interval$ = interval(1000);

const time$ = timer(2000);
/**
 * El primera valor determina desde que momento empieza a emitir y el otro cada cuanto va emitir el siguiente
 * con esto convertimo un timer en un interval con un funcionalidad extra.
 */
const timeInterval$ = timer(2000, 1000);

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );
const timerWidthDate$ = timer(hoyEn5)
console.log('Inicio');
//Es asíncrono
// interval$.subscribe( observer );
//Es asíncrono
//time$.subscribe(observer);
//timer interval
// timeInterval$.subscribe( observer );
timerWidthDate$.subscribe(observer);
/**
 * Con timer es posible crear un intervar que empiece a emitir en un momento determinado
 */

console.log('Fin');