
import { interval, map, scan, take } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;

    //mi resolución
    const countdown$ = interval(700).pipe(
        take(8),
        //sabía que algo raro había en no usar ese resp que son los numeros emitidos por el intervalo
        map(resp => inicio),
        scan((acc) => acc - 1)
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
    );

    //la suloción mejorada
    const countdown2$ = interval(700).pipe(
        
        // scan((acc) => acc - 1), // en el mismo map ya hacemos la lógica de descuento e inicio en 7
        map(valorIntervalo => inicio - valorIntervalo),

        //en el take dejamos inicio + 1, esto hace que sea mas dinamico el tope
        take(inicio + 1),
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
    );
    

    // No tocar esta línea ==================
    countdown2$.subscribe( console.log ); // =
    // ======================================


})();

		





