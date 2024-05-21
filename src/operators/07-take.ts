import { from, of } from 'rxjs';
import { filter, map, mergeAll, take, tap, toArray } from 'rxjs/operators';


const numbers$ = of(1,2,3,4,5);

/**
 * Va a emitir solo las veces determinadas por el take
 */
const limit$ = numbers$.pipe(
    take(3)
)

limit$.subscribe(console.log)