import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);
// const src$ = range(1, 14) // No se refiere de 1 a 14, sino 14 emiciones
const src$ = range(1, 14, asyncScheduler) // asyncScheduler agrega la posibilidad de ser asincrono


console.log('inicio');

src$.subscribe(console.log);

console.log('fin');
