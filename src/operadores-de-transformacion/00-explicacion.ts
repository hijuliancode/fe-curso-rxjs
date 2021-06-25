import { fromEvent } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { debounceTime, map, pluck } from 'rxjs/operators'

const click$ = fromEvent( document, 'click').subscribe( console.log )

const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

// Streams

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup')

input$.pipe(
  debounceTime(500),
  map( event => {
    const value = event.target['value'];
    return ajax.getJSON(`https://api.github.com/users/${ value }`)
  } ),
).subscribe( resp => {
  resp.pipe(
    pluck('url')
  ).subscribe( console.log )
} )

/**
 * Operadores de Transformacion: Con los operadores de transformacion intentaremos 
 * resolver lo anterior, donde para acceder a una respuesta, estamos realizando 2 
 * suscripciones
 */