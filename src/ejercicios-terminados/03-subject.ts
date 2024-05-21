import { Subject, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================

    
  
  
  // Estos dos observables deben de emitir exactamente los mismos valores

    const relojSubject$ = new Subject();

    reloj$.subscribe( relojSubject$ );
    

    relojSubject$.subscribe(console.log);
    
    relojSubject$.subscribe(console.log);


    

    








})();
