import { fromEvent } from 'rxjs'
import { debounceTime, distinctUntilChanged, pluck, tap } from 'rxjs/operators'

// Trabaja en base a intervalos de tiempo
// Nos ayuda a que podamos contar cuantas milesimas han pasado desde la ultima emisión
// Si pasan esas milesimas que hemos indicado, entonces emitirá el ULTIMO valor

// Primer ejemplo
const click$ = fromEvent<MouseEvent>( document, 'click' )

// click$.pipe(
//   debounceTime(3000) // Despues de hacer el último click, emite el valor del último
// ).subscribe( console.log )


// Segundo ejemplo
const input = document.createElement('input')
document.querySelector('main').append( input )

const input$ = fromEvent<KeyboardEvent>( document, 'keyup' )

input$.pipe(
  debounceTime(1000),
  pluck( 'target', 'value' ),
  distinctUntilChanged(), // Para prevenir que se vuelva a enviar la información, ejemplo, alguién escribe algo, borra y vuelve a escribir lo mismo
).subscribe( console.log )