import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.info('complete')
}

const interval$ = new Observable<number>(subs => {
  const intervalID = setInterval(
    () => subs.next(Math.random()), 3000
  )

  return () => clearInterval(intervalID)
})

// const sub1 = interval$.subscribe(random => console.log('sub1', random))
// const sub2 = interval$.subscribe(random => console.log('sub2', random))

const subject$ = new Subject<number>()

interval$.subscribe(subject$)

const sub1 = subject$.subscribe(random => console.log('sub1', random))
const sub2 = subject$.subscribe(random => console.log('sub2', random))