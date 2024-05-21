import { from, of } from 'rxjs';
import { filter, map, mergeAll, take, tap, toArray } from 'rxjs/operators';


const numbers$ = of(1,2,3,4,5);


const limit$ = numbers$.pipe(
    take(3)
)

// limit$.subscribe(console.log)


const getNumbers$ = of([5,2,6,8,9,7]);


const filter$ = getNumbers$.pipe(

    map(numbers => from(numbers)),
      // Aplanar el Observable<Observable<number>> a Observable<number>
      mergeAll(),
      // Filtrar cada número individualmente
      filter(number => number > 5),
      // Reconstruir un array con los números filtrados
      toArray()
)

filter$.subscribe(console.log)


