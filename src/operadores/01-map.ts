import { range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// first demo of map
// range(1, 8).pipe(
//   map<number, number>(val => val * 10)
// )
// .subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
const keyUpCode$ = keyup$.pipe( // Puedo agregarlo directamente a la linea anterior
  map(val => val.key)
)

keyUpCode$.subscribe( console.log )