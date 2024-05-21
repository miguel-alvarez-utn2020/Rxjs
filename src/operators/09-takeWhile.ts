import { map, takeWhile } from 'rxjs/operators';
import { from, fromEvent } from 'rxjs';




const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * en este primero ejemplo mientras el valor emitido por el observable
 * cumpla con la condición emitira dichos valores
 * cuando deje de cumplirse completara el observable
 */
click$.pipe(
    map(({x, y}) => ({x, y})),
    takeWhile((coods) => coods.x > 100)
).subscribe({
    next: (value => console.log('sub', value)),
    complete: () => console.log('complete')
})