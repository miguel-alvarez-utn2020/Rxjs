import { fromEvent, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';



const personajes = [
    {
        nombre: 'Batman',
        tipo: 'hero'
    },
    {
        nombre: 'Robin',
        tipo: 'hero'
    },
    {
        nombre: 'Jocker',
        tipo: 'Villano'
    },
]

// const personajes$ = from(personajes);
const personajes$ = from(personajes);

personajes$.
pipe(
    filter((hero: any) => hero.tipo === 'hero')
)
.subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');


/**
 * encadenar operadores con pipe
 * Puedes encadenar los operadores con pipe, estos se ejecuta de arriba hacia abajo
 * 
 */
keyup$
.pipe(
    map<KeyboardEvent, string>(event => event.code),
    filter((velue) => velue === 'Enter')
)
.subscribe(value => console.log(value));





