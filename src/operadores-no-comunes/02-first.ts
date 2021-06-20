import { fromEvent, Observer } from 'rxjs';
import { first, tap } from 'rxjs/operators'

const observer: Observer<unknown> = {
  next: val => console.log('next:', val),
  error: null,
  complete: () => console.log('¡Complete!')
}

const click$ = fromEvent<MouseEvent>( document, 'click' )

click$.pipe(
  tap( (t) => console.log('tap') ),
  first<MouseEvent>(ev => ev.clientY >= 150)
).subscribe( observer )


/**
 * Cuando se pone la condición no se emite ningún valor hasta que se cumple la condición
 * Si no se especifica, quiere decir que solo nos importa el primer evento que ocurra
 */