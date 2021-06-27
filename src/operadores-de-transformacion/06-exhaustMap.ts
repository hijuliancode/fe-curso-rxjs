// El Exhaust map solo mantiene una suscripcion activa
// Si llega una nueva, la ignora, y solo aceptara otra, hasta que la que tiene activa
// haya finalizado osea se haya completado

import { fromEvent, interval } from "rxjs";
import { concatMap, exhaustMap, take } from "rxjs/operators";

const click$ = fromEvent( document, 'click' )
const interval$ = interval( 500 ).pipe( take(10) )

click$.pipe(
  // concatMap( () => interval$ ) // Sabemos que si llega una nueva suscripcion, concatMap concatena y ejecuta la siguiente al finalizar la actual
  exhaustMap( () => interval$) // Contrario al concatMap, exhaustMap ignora las nuevas suscripciones hasta que la actual haya finalizado
).subscribe( console.log )

// Es muy util cuando tenemos eventos que pueden ser ejcutados multiples veces y queremos ignorar, un click a un boton o un submit a un formulario