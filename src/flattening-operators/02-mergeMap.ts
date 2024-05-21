import { delay, interval, map, mergeMap, of, take } from 'rxjs'


const list$ = of('a', 'b', 'c');




list$.pipe(
    mergeMap((val)=> 
        of(`Este es el valor mergeado ${val}`).pipe(delay(1000))
        
        ))
.subscribe({
    next: (val => console.log(val)),
    complete: () => console.log('complete')
})