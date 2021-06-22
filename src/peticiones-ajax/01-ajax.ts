import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, pluck } from 'rxjs/operators';

const atraparError = (error: AjaxError) => {
  // Sirve para atrapar cualquier error que ocurra en el observable (no solo errores http)
  // Puede retornar un error o un observable, cuando el observable que se le pasa, finaliza, el complete del subscribe se ejecuta
  console.warn('=>>>>>', error)
  console.warn('=>>>>>', error.status)
  console.warn('=>>>>>', error.message)
  return of([]); // Retorna un arreglo vacio cuando hay errores (para que no se rompa el app)
}

// Demo petición normal
const urlApi = 'https://api.github.com/usERRORers?per_page5' // Error
// const urlApi = 'https://api.github.com/users?per_page5'

ajax(urlApi).pipe(
  pluck('response'),
  catchError(atraparError)
).subscribe((users) => console.log('usuarios', users))