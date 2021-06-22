import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

// const urlApi = 'https://api.github.com/users?per_page5'
// const urlApi = 'https://httpbin.org/delay/1'
const urlApi = 'https://httpbin.org/ERRORdelay/1' // ERROR

const manejarError = (error: AjaxError) => {
  console.warn('error :', error)
  return of({
    ok: false,
    users: []
  })
}

const obs$ = ajax.getJSON(urlApi).pipe(
  catchError(manejarError)
)
const obs2$ = ajax(urlApi).pipe(
  catchError(manejarError)
)

const obs3$ = ajax(urlApi).pipe(
  catchError(manejarError)
)

// obs$.subscribe(data => console.log('getJson', data))
// obs2$.subscribe(data => console.log('ajax', data))

// Manejo de errores con observer
// Si se agrega el catchError se ejecuta el next y el complete
// Si no se agrega, solo se ejecuta el error

obs2$.pipe(
  catchError(manejarError)
).subscribe({
  next: value => console.log('next: ', value),
  error: error => console.log('error subs: ', error),
  complete: () => console.log('complete: ')
})