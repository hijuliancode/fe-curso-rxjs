import { fromEvent } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators'

const click$ = fromEvent( document, 'click').subscribe( console.log )

const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

// Streams

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup')

// input$.pipe(
//   debounceTime(500),
//   map( event => {
//     const value = event.target['value'];
//     return ajax.getJSON(`https://api.github.com/search/users?q=${ value }`)
//   } ),
// ).subscribe( resp => {
//   resp.pipe().subscribe( console.log )
// } )

/**
 * Operadores de Transformacion: Con los operadores de transformacion intentaremos 
 * resolver lo anterior, donde para acceder a una respuesta, estamos realizando 2 
 * suscripciones
 */

 input$.pipe(
  debounceTime(500),
  pluck('target', 'value'),
  map( text =>  ajax.getJSON(
    `https://api.github.com/search/users?q=${ text }`
  )),
  mergeAll(), // Se suscribe y emite dichos valores, y cuando se completa, también se va a completar
  pluck('items'),
).subscribe( resp => {
  console.log( resp )
} )