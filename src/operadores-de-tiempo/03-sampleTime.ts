import { fromEvent } from 'rxjs'
import { map, sampleTime, tap } from 'rxjs/operators'

// SAMPLETIME:
// Emits the most recently emitted value from the source Observable within periodic time intervals.

const click$ = fromEvent<MouseEvent>( document, 'click' )

click$.pipe(
  sampleTime(5000),
  tap(x => console.log(x)),
  map( ({x, y}) => ({x, y}) ),
).subscribe( console.log )
