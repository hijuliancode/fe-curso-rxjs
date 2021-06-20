import { from, of } from "rxjs";
import { distinct } from "rxjs/operators"

// El operador DISCTINCT permite el paso de valores que no han sido emitido anteriormente por el observable

const numbers$ = of<number | string>(1, 1, '1', 2, 3, 5, 2, 4, 5, 6, 7, 3, 5, 7, 7, 3, 2, 3, 4)

// numbers$.pipe(
//   distinct() // ===
// ).subscribe( console.log )

// Con Objetos

interface Personaje {
  name: string;
}

const personajes:Personaje[] = [
  {
    name: 'Batman'
  },
  {
    name: 'Robin'
  },
  {
    name: 'Jocker'
  },
  {
    name: 'Meganam'
  },
  {
    name: 'Jocker'
  },
  {
    name: 'Batman'
  },
  {
    name: 'Superman'
  },
]

from( personajes ).pipe(
  distinct(p => p.name)
)
.subscribe( console.log )