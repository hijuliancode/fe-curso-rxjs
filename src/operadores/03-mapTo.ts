// mapTo retorna un valor constante del observable
import { fromEvent, Observer } from 'rxjs'
import { map, mapTo } from 'rxjs/operators'

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(val => val),
  mapTo('Tecla presionada. (mensaje constante)')
)
const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
  mapTo('Click hecho')
)

const observer: Observer<any> = {
  next: val => console.log(val),
  error: null,
  complete: () => console.log('Complete')
}

keyup$.subscribe( observer )
click$.subscribe( observer )