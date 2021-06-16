import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.info('complete')
}

const intervalo$ = new Observable<number>(subscriber => {
  let count = 0;

  const interval = setInterval(() => {
    count += 1;
    subscriber.next(count)
  }, 1000);

  setTimeout(() => {
    subscriber.complete()
    /**
     * Inmediatamente yo llame el subscriber.complete() se ejecuta
     * el return () a continuación
     */
  }, 4000)

  return () => {
    clearInterval(interval)
    console.log('Intervalo destruido');
  }
})

let subscription = intervalo$.subscribe(observer)
let subscription2 = intervalo$.subscribe(observer)
let subscription3 = intervalo$.subscribe(observer)

subscription
  .add(subscription2)
  .add(subscription3);

setTimeout(() => {
  // subscription.unsubscribe()
  // subscription.unsubscribe() // Al haber ejecutado un complete, no vuelve a ejecutarse
  // subscription2.unsubscribe()
  // subscription3.unsubscribe()

  // Al haber hecho un subscription.add solo debo unsuscribe del primero y se desuscribe de todos automaticamente
  subscription.unsubscribe()

  console.log('setTimeout completado')
}, 7000)