import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]:', value),
  error: error => console.warn('error [obs]:', error),
  complete: () => console.info('¡Completado! [obs]')
}

const obs$ = new Observable<string>(subs => {
  subs.next('Hola')
  subs.next('Mundo')

  subs.next('Hola')
  subs.next('Mundo')

  // Forzar un error 
  // const a = undefined
  // a.nombre = 'Alejandro'

  subs.complete() // no emite nada a los subscribers despues de el complete

  subs.next('Hola')
  subs.next('Mundo')
})

// obs$.subscribe(res => console.log(res))
// obs$.subscribe(console.log)

// De otra forma también podemos enviar 3 argumentos al subscriber : next, error, complete
// obs$.subscribe(
//   next => console.log('next:', next),
//   error => console.warn('error:', error),
//   () => console.log('¡Completado!')
// )

// Tercera forma de enviar al subscribe para ejecutar lo mismo, (creando un observer)
obs$.subscribe(observer)