import { from, Observer, range } from 'rxjs'
import { filter, map, tap } from 'rxjs/operators'

const numbers$ = range(1, 5)

numbers$.pipe(
  tap(_ => console.log('Antes')), // Tap no envia datos en return (incluso si se agrega), solo sirve para mostrar o emitir información según querramos (console log o eventos)
  map(val => val * 10),
  tap({
    next: val => console.log('despues', val),
    error: null,
    complete: () => console.log('¡Se termino todo!') // Podemos utilizarlo para hacer seguimiento
  }),
).subscribe(val => console.log('subs', val))