import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap} from 'rxjs/operators';

const button = document.createElement('button');
button.innerText = 'Timer';
const body = document.querySelector('body');
body.append(button);


/**
 * con el skip indicamos que va a emitir a partir de la segunda emición
 */
const click$ = fromEvent<PointerEvent>(button, 'click').pipe(
    tap(() => console.log('antes del skip')),
    skip(1),
    tap(() => console.log('despues del skip'))
);
const interval$ = interval(1000);


/**
 * El takeUntil completara el observable interval
 * cuando el evento click sea ejecutado
 */
interval$.pipe(
    takeUntil(click$)
)
.subscribe({
    next: (value) => console.log('subs', value), 
    complete: () => console.log('complete')
})