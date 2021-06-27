import { fromEvent, of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { catchError, concatMap, exhaustMap, map, mergeMap, pluck, startWith, switchMap, tap } from "rxjs/operators"

// Helpers

const peticionHttpLogin = ( userPass ) => 
  ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
      pluck( 'response', 'token'),
      catchError( err => of('xxxx')) // Puedo indicar que si hay error me retorne xxxx (o lo que yo quiera, un string vacio pro ejemplo), y con eso ya puedo validar según necesite
    )


// Creando un formulario
const boyd          = document.querySelector('body')
const form          = document.createElement('form')
const inputEmail    = document.createElement('input')
const inputPassword = document.createElement('input')
const submitBtn     = document.createElement('button')

// Configuraciones
inputEmail.type         = 'email'
inputEmail.placeholder  = 'Email...'
inputEmail.value        = 'eve.holt@reqres.in'

inputPassword.type         = 'password'
inputPassword.placeholder  = 'Password...'
inputPassword.value        = 'cityslicka'

submitBtn.innerHTML = 'Login'

// Insertar elementos
form.append( inputEmail, inputPassword, submitBtn )
boyd.append( form )

// Streams

const submitForm$ = fromEvent<Event>( form, 'submit' )
  .pipe(
    tap( ev => ev.preventDefault() ),
    map( ev => ({
      email: ev.target[0].value,
      password: ev.target[1].value,
    })),
    // mergeMap( peticionHttpLogin ), // mergeMap( userPass => peticionHttpLogin(userPass) ) 
    // switchMap( peticionHttpLogin ) // Reomendado para endpoint, me retorna el valor solo de la ultima emicion
    // concatMap( peticionHttpLogin ) // No se recomienda para llamados endpoint, ya que va a hacer llamado tras llamado, ya que esta concatenando los eventos del observable uno tras otro
    exhaustMap( peticionHttpLogin ) // Mejor recomendacion para el llamado al endpoint, porque hasta que no retorno un valor el observable del endpoint, va a ignorar si se hacen mas llamados
)

submitForm$.subscribe( token => {
  console.log(token)
})