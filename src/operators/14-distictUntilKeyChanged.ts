import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';


/**
 * con es distinctUntilKeyChanged podemos solo emitir los valores unicos filtrando
 * que el valor actual no sea igual al anterior para emitirlo, osea si encuentra que el valor 
 * actual es igual que el anterior no emitira ese valor
 */

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
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
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
]

/**
 * cuando trabajamos con objetos es necesario especificarle al distinctUntilKeyChanged
 * que propiedad evaluaremos para que el filtre los unicos, la firma que necesita es
 * ('key') dichos valores son objetos.
 * de esta manera obtenemos el mismo resultado que el distinctUntilChanged 
 */
from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)