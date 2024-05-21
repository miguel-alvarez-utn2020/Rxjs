import { first, map, tap } from 'rxjs/operators';
import { from, fromEvent } from 'rxjs';




const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * podemos usar el first como el take(1) ya que se va a ejecutar solo la primer emición
 * pero tambien podemos hacerlo mediante un condición de como queremos que sea
 * esa primera y unica vez
 */
click$.pipe(
    tap(() => console.log('sole el tap')),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first((clientCoords) => clientCoords.clientX > 50)
)
.subscribe({
    next: (value) => console.log('sub', value),
    complete: () => console.log('complete')
})

//otro Ejemplo
const numbers$ = from([1,2,3,4]);
/**
 * cuando la condicion se compla se emitira el valor que cumpla la condicón el
 * el observable se completara
 */
numbers$.pipe(
    first(value => value > 3)
)
.subscribe( console.log )
