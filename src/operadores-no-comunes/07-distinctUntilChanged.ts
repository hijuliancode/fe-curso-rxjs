import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators"

// El operador DISCTINCT permite el paso de valores que no han sido emitido anteriormente por el observable

const numbers$ = of<number | string>(1, 1, 2, 3, 2, 4, 5)

// numbers$.pipe(
//   distinctUntilChanged() // ===
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
    name: 'Superman'
  },
  {
    name: 'Batman'
  },
]

from( personajes ).pipe(
  distinctUntilChanged( (anterior, actual) => anterior.name === actual.name)
  // .name === .name // lo quiero bloquear y no dejar pasar
  // .name !== .name // lo quiero dejar pasar
)
.subscribe( console.log )