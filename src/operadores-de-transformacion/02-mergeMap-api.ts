import { fromEvent, Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { debounceTime, map, mergeAll, mergeMap, pluck } from 'rxjs/operators'
import { GithubUser } from '../interfaces/github-user.interface'
import { GithubUsersResp } from '../interfaces/github-users.interface'

const click$ = fromEvent( document, 'click').subscribe( console.log )

const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
  orderList.innerHTML = ''

  console.log('usuarios', usuarios)

  for(const usuario of usuarios) {
    const li  = document.createElement('li')
    const img = document.createElement('img')
    const anchor = document.createElement('a')

    img.src       = usuario.avatar_url;
    anchor.href   = usuario.html_url;
    anchor.text   = 'Ver pagina';
    anchor.target = '_blank';

    li.append( img, (usuario.login + '' ), anchor)

    orderList.append( li )
  }
}


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
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  mergeMap<string, Observable<GithubUsersResp>>( text =>  ajax.getJSON(
    `https://api.github.com/search/users?q=${ text }`
  )),
  pluck<GithubUsersResp, GithubUser[]>('items'),
); // .subscribe( mostrarUsuarios )

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck( 'target', 'value' ),
  mergeMap( val => ajax.getJSON( url + val ) )
).subscribe( console.log )

// El Merge map genera datos de cada suscribicion o observable al que esta suscrito
// Entonces, a menos que sea el requerimiento, no se recomienda para llamados a endpoint
// como se ve en el ejemplo anterior cada vez que se escirbe una letra en el input, el mergeMap hace
// un llamado al endpoint, estos son muchos llamados