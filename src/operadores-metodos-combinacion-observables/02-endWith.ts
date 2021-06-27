import { of } from "rxjs";
import { endWith, startWith } from 'rxjs/operators'

const numeros$ = of(1, 2, 3)

numeros$.pipe(
  startWith('a', 'b', 'c'),
  endWith('x', 'y', 'z'),
).subscribe( console.log )