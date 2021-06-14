import { Observable } from "rxjs";

const obs$ = new Observable<string>(subs => {
  subs.next('Hola')
  subs.next('Mundo')

  subs.next('Hola')
  subs.next('Mundo')

  subs.complete() // no emite nada a los subscribers despues de el complete


  subs.next('Hola')
  subs.next('Mundo')
})

// obs$.subscribe(res => console.log(res))
obs$.subscribe(console.log)