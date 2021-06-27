import { of } from "rxjs";
import { startWith } from "rxjs/operators";


const numeros$ = of(1, 2, 3)

numeros$.pipe(
  startWith('a')
).subscribe( console.log )