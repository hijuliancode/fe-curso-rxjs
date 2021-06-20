import { from } from "rxjs"
import { scan, reduce } from "rxjs/operators"

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