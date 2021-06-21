import { fromEvent } from 'rxjs'
import { pluck, tap, auditTime } from 'rxjs/operators'

/**
 * Emite el ultimo valor del subscribe en el tiempo que le he especificado
 * Empieza a contar cuando se emite un valor,
 * Si fromEvent emitio un valor empieza a contar 5 segundos, 
 * Al finalizar los 5 segundos auditTime solo emite el ULTIMO valor
 * Si se completa el principal observable y no se han completado lso 5 segundos desde 
 * la última emición, entonces no emite nada, finaliza así
 */

fromEvent( document, 'click' ).pipe(
  tap( x => console.log('tap', x) ),
  auditTime(5000),
  pluck('clientY'),
).subscribe( s => console.log('subscribe:', s) )