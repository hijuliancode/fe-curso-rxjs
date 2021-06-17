import { Observer, fromEvent } from "rxjs";

/**
 * Definicion Observables
 */

const obs1$ = fromEvent<MouseEvent>(document, 'click')
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup')

const observer = {
  next: value => console.log('next value', value)
}

obs1$.subscribe(({ x, y }) => console.log(x, y))
obs2$.subscribe((event) => console.log(event.key))