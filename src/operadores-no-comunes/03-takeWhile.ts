import { fromEvent, Observer } from 'rxjs'
import { map, takeWhile } from 'rxjs/operators'

const observer: Observer<unknown> = {
  next: val => console.log('next:', val),
  error: null,
  complete: () => console.log('¡Complete!')
}

const click$ = fromEvent<MouseEvent>( document, 'click' ).pipe(
  map(({ clientX, clientY }) => ({ clientX, clientY })),
  takeWhile(({ clientY }) => clientY < 150, true),
  // El true se refiere a la propiedad inclusive, en la cual especifico si quiero que incluya el ultimo valor emitido
)

click$.subscribe( observer )