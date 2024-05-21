import { from } from 'rxjs';


const observer = {
    next: (nombre) => console.log(nombre),
    complete: () => console.log('complete')
}

//puede trabajar con peticiones e iterables.
const nombre$ = from([1,2,3,4,6,5]);
nombre$.subscribe( observer );

