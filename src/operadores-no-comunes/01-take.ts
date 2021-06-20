import { of } from 'rxjs'
import { take, tap } from 'rxjs/operators'

const numeros$ = of(1, 2, 3, 4, 5).pipe(
  tap(t => console.log('tap:', t))
);

numeros$.pipe(
  take(3) // Me hace una ejecución de 3 veces y llama el complete
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete!')
})