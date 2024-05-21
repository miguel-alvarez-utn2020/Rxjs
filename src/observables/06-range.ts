import { asyncScheduler, range } from 'rxjs';


const src$ = range(1,2);
// const src$ = range(1,2, asyncScheduler); async range

console.log("Inicio del programa");
src$.subscribe( console.log );
console.log("Fin del programa");