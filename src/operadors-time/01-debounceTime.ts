import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';


const input = document.createElement('input');
const body = document.querySelector('body');

body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    //Emitira el valor pasado un segundo, y mietras siga emitiendo
    //el segundo se reincia hasta que durante un segundo no haya emiciones y emitira
    debounceTime(1000),
    map((input: any) => input.target.value),
    distinctUntilChanged((valorAnterior, valorActual) => valorAnterior === valorActual)

)
.subscribe(console.log)
