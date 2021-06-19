import { fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

// Mismo ejemplo del map, pero con pluck

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
const keyupPluck$ = keyup$.pipe( // Puedo agregarlo directamente a la linea anterior
  // pluck('key') // Puedo extraer directamente la propiedad del objeto, en lugar de uzar map para retornar una propiedad
  pluck('target', 'baseURI') // Puedo acceder a una propiedad dentro de otra propiedad, sería como utilizar target.baseURI  { target: { baseURI: ... } }
)

// keyup$.subscribe( console.log )
keyupPluck$.subscribe( console.log )