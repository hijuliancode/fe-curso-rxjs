import { fromEvent, interval } from 'rxjs'
import { sample } from 'rxjs/operators'

/**
 * SAMPLE:
 * Emite el último valor del observable, solo/hasta que el observable que le pasamos al sample como argumento se ejecute
 * En el siguiente ejemplo, el interval se va ejecutando, pero no se muestra nada en la suscripción, 
 * Solo se mustra hasta que se haga click, y esto me emitiría el último valor que  estaba en interval
 */

const interval$ = interval(500)
const click$    = fromEvent(document, 'click')

interval$.pipe(
  sample(click$)
).subscribe( console.log )