import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.info('complete')
}

const interval$ = new Observable<number>(subs => {
  // El observer internamente en el Observable se conoce como Subscriber
  const intervalID = setInterval(
    () => subs.next(Math.random()), 1000
  )

  return () => {
    console.log("Intervalo destruido")
    clearInterval(intervalID)
  }
})

// const sub1 = interval$.subscribe(random => console.log('sub1', random))
// const sub2 = interval$.subscribe(random => console.log('sub2', random))

const subject$ = new Subject<number>()

const subscription = interval$.subscribe(subject$)

const sub1 = subject$.subscribe(observer)
const sub2 = subject$.subscribe(observer)

setTimeout(() => {

  subject$.next(10)

  subject$.complete()

  subscription.unsubscribe()

}, 3500)

/**
 * NOTA: Cuando la data es producida por el observable en sí mismo, es considerado un "Cold Observable". Pero cuando la data es producida FUERA del observable es llamado "Hot Observable".
 */