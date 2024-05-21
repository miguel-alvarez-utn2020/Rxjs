import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


/**
 * con es distinctUntilChanged podemos solo emitir los valores unicos filtrando
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
 * cuando trabajamos con objetos es necesario especificarle al distinctUntilChanged
 * que propiedad evaluaremos para que el filtre los unicos, la firma que necesita es
 * (valorAnterior, valorActual) dichos valores son objetos.
 */
from(personajes).pipe(
    distinctUntilChanged((valorAnterior, valorActual) => valorAnterior.nombre === valorActual.nombre)
)
.subscribe(console.log)