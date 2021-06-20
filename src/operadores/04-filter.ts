import { from, fromEvent, Observer, range } from 'rxjs'
import { filter, pluck } from 'rxjs/operators'

const observer:Observer<unknown> = {
  next: val => console.log(val),
  error: null,
  complete: () => console.log('¡Complete!')
}

// DEMO FILTER CON NÚMEROS
// range(20, 30).pipe(
//   filter( (val, i) => {
//     console.log('index', i);
//     return val % 2 === 1
//   })
// ).subscribe( observer )


// De

interface Personaje {
  type: string;
  name: string;
}

const personajes:Personaje[] = [
  {
    type: 'hero',
    name: 'Batman'
  },
  {
    type: 'hero',
    name: 'Robin'
  },
  {
    type: 'villain',
    name: 'Jocker'
  }
]

from(personajes).pipe(
  filter(elm => elm.type !== 'hero')
).subscribe( observer )


// Ejercicio

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  pluck('code'),
  filter(key => key === 'Enter') // únicamente se activa cuando se da click en enter
  
)

keyup$.subscribe( observer )
