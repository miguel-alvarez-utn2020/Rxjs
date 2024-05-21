import { fromEvent, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';



const obs$ = from([1,2,3,4,5])
/**
 * con el tap podemos debugear todo el flujo de datos que pasa por los observables
 */
obs$.pipe(
    tap(value => console.log('tap ->', value)),
    map(value => value * 2),
    tap({
        next: (value) => console.log('map ->', value),
        complete: () => console.log('complete')
    })
)
.subscribe( value => console.log('subs ->',value) )