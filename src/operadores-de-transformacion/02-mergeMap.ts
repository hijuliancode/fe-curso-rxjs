import { fromEvent, interval, of } from 'rxjs'
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');
  // Aunque este observable se termina rapido, no se completa hasta que se completen todos los observables

letras$.pipe(
  mergeMap(
    (letra) => interval(1000).pipe(
      map(i => letra + i),
      take(4)
    )
  )
)
// .subscribe({
//   next: val => console.log('next>', val),
//   error: err => console.log('err  >', err),
//   complete: () => console.log('complete!')
// })

const mouseDown$ = fromEvent( document, 'mousedown' )
const mouseUp$   = fromEvent( document, 'mouseup' )
const interval$  = interval()

mouseDown$.pipe(
  mergeMap( () => interval$.pipe(
    takeUntil( mouseUp$ )
  ) )
).subscribe( console.log )

/**
 * El mergeMap es un operador de aplanamiento, lo que significa que no obtenemos un observable de salida
 * solo el producto de la suscripcion del mismo.
 */