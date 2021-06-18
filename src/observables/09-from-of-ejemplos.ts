import { from, of } from "rxjs"

/**
 * of: toma argumentos y genera una secuencia de valores
 * from: crea un observable en base a un array, object, promise, iterable, otro observable y más
 */

const observer = {
  next: val => console.log('next: ', val),
  complete: () => console.log('complete'),
}

// const source$ = from([1, 2, 3, 4, 5])
// const source$ = of([1, 2, 3, 4, 5])
// const source$ = of(...[1, 2, 3, 4, 5])
// const source$ = of('Julian')
// const source$ = from('Julian')

// Demo fetch with subscribe
// const source$ = from<Promise<Response>>( fetch('https://api.github.com/users/hijuliancode') )

// source$.subscribe( async (resp) => {

//   console.log(resp);

//   const dataResp = await resp.json()

//   console.log(dataResp)
  
// })
// Demo fetch with subscribe - end

// source$.subscribe( observer ) 

const miGenerador = function *() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

var subs$ = from(miGenerador())
subs$.subscribe(observer)

// or

from(miGenerador()).subscribe(observer)