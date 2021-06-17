import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.info('complete')
}

const demo$ = new Observable(subs => {
  subs.next('1')
  subs.next('2')
  subs.next('3')
  subs.next('4')

  setTimeout(() => {
    console.log('subs.complete()')
    subs.complete()
  }, 3000)

  return () => {
    console.log('return()');
  }
})

const subscription = demo$.subscribe(observer);

setTimeout(() => {
  subscription.unsubscribe()
}, 3000)