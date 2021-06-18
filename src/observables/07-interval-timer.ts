import { interval, timer } from "rxjs"

const ahoraEn5 = new Date() // hoy/ahora
ahoraEn5.setSeconds( ahoraEn5.getSeconds() + 5 ) // Sumo 5 segundos al ahora

const observer = {
  next: val  => console.log('next:', val),
  complete: () => console.log('¡Completado!')
}

// Interval & timer son asyncronos, no se ejecutan de inmediato sino se priorizan en la cola del 

const interval$ = interval(4000)
// const timer$ = timer(2000) // Se ejecuta a los 2 segundos
// const timer$ = timer(2000, 1000) // Se ejecuta a los 2 segundos y despues cada segundo
const timer$ = timer( ahoraEn5 ) // Se ejecuta en date (5segundos)

console.log('inicio...');

// interval$.subscribe(observer)
timer$.subscribe(observer)

console.log('...fin');

