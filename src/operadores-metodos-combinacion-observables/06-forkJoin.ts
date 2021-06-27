// forkJoin: puede recibir varios observables y retornar la emision de estos, pero solo retorna cuando todos se han completado
// es por eso que los observables a los que se suscribe deben ser finitos, finalizar en algun momento
// osino nunca retornaria nada y no se completaria

import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4)
const interval$ = interval( 1000 ).pipe( take(4) )
const letras$ = of('a', 'b', 'c', 'd').pipe( delay(3500) )

// forkJoin(
//   numeros$,
//   interval$,
//   letras$
// ).subscribe( console.log )

// forkJoin(
//   numeros$,
//   interval$,
//   letras$
// ).subscribe( resp => {
//   console.log('numeros: ', resp[0]);
//   console.log('intervals: ', resp[1]);
//   console.log('letras: ', resp[2]);
// } )

// forkJoin({
//   numeros$,
//   interval$,
//   letras$
// }).subscribe( console.log )

forkJoin({
  num: numeros$,
  int: interval$,
  let: letras$
}).subscribe( console.log )
