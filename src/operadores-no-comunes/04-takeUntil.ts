import { Observer, interval, fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";

const observer: Observer<unknown> = {
  next: val => console.log('next:', val),
  error: null,
  complete: () => console.log('¡Complete!')
}

const button = document.createElement('button')
button.innerHTML = 'Detener Timer'
document.querySelector('body').append(button)

const counter$ = interval(1000)
const clickBtn$ = fromEvent( button, 'click' )

counter$.pipe(
  takeUntil( clickBtn$ ) // Se detiene en el momento que el evento del botón se emite
)
.subscribe( observer )
