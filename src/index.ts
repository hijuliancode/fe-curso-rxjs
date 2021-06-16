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
    console.log(count)
  }, 1000);

  return () => {
    clearInterval(interval)
    console.log('Intervalo destruido');
  }
})

let subscription = intervalo$.subscribe(observer)

setTimeout(() => {
  subscription.unsubscribe()
}, 7000)