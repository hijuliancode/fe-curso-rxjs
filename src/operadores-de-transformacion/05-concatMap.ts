import { fromEvent, interval } from 'rxjs'
import { concatMap, mergeMap, switchMap, take } from 'rxjs/operators'

const click$ = fromEvent( document, 'click')
const interval$ = interval(500).pipe( take(3) )

click$.pipe(
  // mergeMap( () => interval$ ) // Emite el resultado de todos los observables, tanto nuevos como antiguos en el orden que vayan emitiendose
  // switchMap( () => interval$ ) // Emite el resultado solo de la ultima emicion del ultimo observable ejecutado, completa lo anterior
  concatMap( () => interval$ ) // Emite el resultado de todos los observables, pero concatenado, a diferencia del mergeMap no emite segun aparece o llega emicion sino que espera a que se complete el anterior para asi emitir el siguiente valor
)
.subscribe( console.log )

// Hasta que termina el primer observable ejecuta el siguiente y ejecuta el siguiente hasta que ya no existan mas observables dentro del concat map