import { interval, range } from "rxjs"
import { reduce, take, tap } from "rxjs/operators"

/**
 * Reducer en JavaScript
 */

const numbers = [1, 2, 3, 4, 5]

const totalReducer = (
  acumulador: number,
  valorActual: number
) =>  acumulador + valorActual

const total = numbers.reduce(totalReducer, 0)

console.log('total reducer', total)

/**
 * Reduce en RxJS
 */

// DEMO REDUCE
// const numbers2$ = range(1, 5)

// numbers2$.pipe(
//   reduce((acc, val) => acc + val)
// ).subscribe( console.log )

interval(500).pipe(
  take( 6 ),
  tap( console.log ),
  reduce( totalReducer, 0 ) // Nos devuelve el valor total, sin embargo no nos devuelve el valor en cada iteración
).subscribe( {
  next: val => console.log(val),
  error: null,
  complete: () => console.log('¡Complete!')
} )
