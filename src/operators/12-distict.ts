import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numbers$ = of(1,2,3,4,5,6,1,7,3,8,8,2,2,2,3);
/**
 * con es distict podemos solo emitir los valores unicos filtrando los repetidos
 */
numbers$.pipe(
    distinct()
)
.subscribe(value => console.log('sub', value))

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
]

/**
 * cuando trabajamos con objetos es necesario especificarle al distict
 * que propiedad evaluaremos para que el filtre los unicos
 */
from(personajes).pipe(
    distinct(p => p.nombre)
)
.subscribe(console.log)