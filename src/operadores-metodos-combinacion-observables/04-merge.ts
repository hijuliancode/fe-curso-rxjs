// Metodo Merge
// Recibe uno o mas observables y el resultado sera el producto de ambos observables combinados simultaneamente

import { fromEvent, merge } from "rxjs";

const keyup$ = fromEvent( document, 'keyup' )
const click$ = fromEvent( document, 'click' )

merge( keyup$, click$).subscribe( console.log )