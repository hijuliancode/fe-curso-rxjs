// Funcion Concat

import { concat, from, interval, of } from "rxjs";
import { take } from "rxjs/operators";

const observable$ = interval( 500 )
const observable2$ = interval( 500 )
const observable3$ = interval( 500 )

// Funcion concat, el operador esta obsoleto

// La funcion concat me ejecuta cada observable y retorno, uno detras de otro, no ejecuta el siguiente hasta que se finalice el actual

// como me retorna un observable tambien podria guardar el concat en una variable

// El observable 2 no se va a ejecutar hasta que el observable 1 se complete, si nunca se completa el 1, el 2 jamas se ejecuta
concat(
  observable$.pipe( take(3) ),
  observable2$.pipe( take(2) ),
  observable3$.pipe( take(5) ),
  of(1), // Tambien le podemos pasar of
  of(1, 2, 3, 4, 5),
  from([1, 2, 3, 4, 5, 6, 7]) // o arreglos desde un from
).subscribe( console.log )