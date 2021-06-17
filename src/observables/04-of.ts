import { of } from 'rxjs'

const list = [1, 2, 3, 4, 5, 6, 7]
const obs$ = of(...list)

console.log('Inicio del Obs');

obs$.subscribe(
  next => console.log('next => ', next),
  null,
  () => console.log('Secuencia terminada')
)

console.log('Fin del Obs');
