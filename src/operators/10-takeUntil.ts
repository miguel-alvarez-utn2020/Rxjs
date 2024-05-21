import { fromEvent, interval } from 'rxjs';
import { takeUntil} from 'rxjs/operators';

const button = document.createElement('button');
button.innerText = 'Timer';
const body = document.querySelector('body');
body.append(button);


const click$ = fromEvent<PointerEvent>(button, 'click');
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