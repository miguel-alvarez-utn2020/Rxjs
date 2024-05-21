import { of, Observer } from 'rxjs';


const observer: Observer<number> = {
    next: (resp) => console.log(resp),
    error: null,
    complete: ()=> console.log("Complete")
}

const obs$ = of(1,2,3,4)

console.log("Inicio el observable");

obs$.subscribe(observer);

console.log("Termino el observable");

