import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators"
// Con Objetos

interface Personaje {
  name: string;
  lastName: string;
}

const personajes:Personaje[] = [
  {
    name: 'Gerson',
    lastName: 'Díaz',
  },
  {
    name: 'Gerson',
    lastName: 'Díaz',
  },
  {
    name: 'Gerson',
    lastName: 'Díaz',
  },
  {
    name: 'Luis',
    lastName: 'Enrique'
  },
  {
    name: 'Gerson',
    lastName: 'Díaz',
  },
  {
    name: 'J Alejandro',
    lastName: 'Sosa'
  }
]

from( personajes ).pipe(
  distinctUntilKeyChanged( 'name' )
)
.subscribe( console.log )