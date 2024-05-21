import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';


const input = document.createElement('input');
const body = document.querySelector('body');

body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
/**
 * el throttleTime es muy parecido al debaounceTime con la diferencia que emite
 * el primer valor pero no emite durante un periodo de tiempo especificado
 * con la configuracio extra, podemos hacer que se comporte muy parecido 
 * al debaounceTime pero con algunos comportamientos extra
 */
input$.pipe(
    //emitira el primer valor y durante un segundo ignorara todas las emiciones
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    map((input: any) => input.target.value),
    distinctUntilChanged((valorAnterior, valorActual) => valorAnterior === valorActual)

)
.subscribe(console.log)