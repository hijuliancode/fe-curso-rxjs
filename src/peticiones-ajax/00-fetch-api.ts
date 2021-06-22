import { from } from 'rxjs';

// Demo Manejo Errores
const manejoErrores = (response: Response) => {
  if ( !response.ok ) {
    throw new Error( response.statusText ) // Para que se dispare el catch debo manejar un throw en las promesas
  }
  return response 
}

// Demo petición normal
const urlApi = 'https://api.github.com/usERRORers?per_page5'

const fetchPromesa = fetch( urlApi )

fetchPromesa
  .then( manejoErrores )
  .then( resp => console.log(resp) )
  .then( data => console.log('data:', data) )
  .catch( err => console.warn('error en usuarios:', err))