import { from } from "rxjs"
import { scan, reduce, map, pluck } from "rxjs/operators"

const numbers = [1, 2, 3, 4, 5]

const totalNumbers = (acc, curr) => acc + curr

// Javascript 
  console.log('js:', numbers.reduce( totalNumbers ) )

// Reduce
// Me retorna el total al finalizar, pero no el acumulador en cada iteración
from( numbers ).pipe(
  reduce( totalNumbers )
).subscribe( subs => console.log('reduce:', subs) )

// Scan
// Me retornal el total al finalizar y también el acumulador en cada iteración
from( numbers ).pipe(
  scan( totalNumbers )
).subscribe( subs => console.log('scan:', subs) )

// Redux Demo

interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  edad?: number;
}

const user:User[] = [
  { id: 'fher', auth: false, token: null },
  { id: 'fher', auth: true, token: 'abc' },
  { id: 'fher', auth: true, token: 'abc123' },
]

const state$ = from( user ).pipe(
  scan<User>( (acc, curr) => {
    return {...acc, ...curr}
  }, { edad: 33 } )
)

const id$ = state$.pipe(
  // map( state => state.id ),
  pluck( 'id' ),
)

// Lo anterior, aunque nos suscribimos cuando haya cambios en el id, genera un problema
// ya que me imprime 3 veces id, cuando en realidad solo necesito que haya 1 vez
// se soluciona con otro operador más adelante

id$.subscribe( console.log )