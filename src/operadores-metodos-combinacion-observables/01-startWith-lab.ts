import { ajax } from "rxjs/ajax"
import { startWith } from "rxjs/operators"


// Referencias
const body = document.querySelector('body')
const loadingDiv = document.createElement( 'div' )

loadingDiv.classList.add('loading')
loadingDiv.innerHTML = 'Cargando'


  // Stream

  ajax.getJSON('https://reqres.in/api/users?delay=3')
    .pipe (
      startWith(true) 
    )
    .subscribe( resp => {
      if ( resp === true ) { // Debido a que le indique que inicie con true
        body.append( loadingDiv ) // agregar el loading
      } else { // Cuando retorna otro valor (ya no es true sino un objeto) puedo remover el loading
        body.querySelector('.loading').remove()
      }
      console.log(resp)
    } )