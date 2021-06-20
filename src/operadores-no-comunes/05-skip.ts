import { Observer, interval, fromEvent } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const observer: Observer<unknown> = {
  next: val => console.log('next:', val),
  error: null,
  complete: () => console.log('¡Complete!')
}

const button = document.createElement('button')
button.innerHTML = 'Detener Timer'
document.querySelector('body').append(button)

const counter$ = interval(1000)
const clickBtn$ = fromEvent( button, 'click' ).pipe(
  tap( () => console.log( 'Tap antes del skip') ),
  skip(2), // No se ejecuta lo siguiente al 2, se ejecuta despues de saltarse 2
  tap( () => console.log( 'Tap despues del skip, hasta que el skip se cumpla') ),
)

counter$.pipe(
  takeUntil( clickBtn$ ) // Se detiene en el momento que el evento del botón se emite
)
.subscribe( observer )
