import { forkJoin, of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { catchError } from "rxjs/operators"

const GITHUB_API_URL = 'https://api.github.com/users'
const GITHUB_USER    = 'hijuliancode'

forkJoin({
  usuario: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}`
  ).pipe(
    catchError( err => of([]) ) // Lo agregamos para en caso de fallar un endpoint, igual devuelva los resultados de los demas
  ),
  repos: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/repos`
  ).pipe(
    catchError( err => of([]) ) // Lo agregamos para en caso de fallar un endpoint, igual devuelva los resultados de los demas
  ),
  gists: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/gists`
  ).pipe(
    catchError( err => of([]) ) // Lo agregamos para en caso de fallar un endpoint, igual devuelva los resultados de los demas
  ),
  zyxejemplo_error: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/ejemploerror`
  ).pipe(
    catchError( err => of([]) ) // Lo agregamos para en caso de fallar un endpoint, igual devuelva los resultados de los demas
  ),
}).pipe(
  catchError( err => of(err) ) // Cuando se atrapa un error arriba, este no se ejecuta
).subscribe( console.log )

// De lo anterior si falla un endpoint fallan todos, por eso es bueno manejar los erores