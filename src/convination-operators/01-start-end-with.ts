import { endWith, of, startWith } from "rxjs";



const numeros$ = of(1,2,3);

numeros$.pipe(
    //startWith se ejecutara antes que las emisiones del observables de manera sincrona
    startWith('a', 'b', 'c'),

    //endWith se ejecura al final de las emisions de manera sincrona
    endWith('x', 'y', 'z')

    //dato a tene en cuenta, no importa el orden de estos en el flujo
    //siempre se ejecutaran al principio y al final, pero se recomienda el uso legible
    //startWith arriba de todo y endWith abajo de todo el flujo
)
.subscribe(console.log)