import { asyncScheduler, fromEvent } from 'rxjs'
 import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators'

/**
 * El opuesto a debounceTime el throttleTime empieza a contar las milesimas, a partir de
 * la última emizión, (no antes), PERO si ocurre que dentro del tiempo que hemos especificado se emiten valores
 * el throttleTime no los va a emitir, solo a partir del tiempo que especificamos,
 * no retorna el último valor emitido
 */
 
 // Primer ejemplo
 const click$ = fromEvent<MouseEvent>( document, 'click' )
 
//  click$.pipe(
//    throttleTime(3000) // Despues de hacer el último click, emite el valor del último
//  ).subscribe( console.log )
 
 
 // Segundo ejemplo
 const input = document.createElement('input')
 document.querySelector('main').append( input )
 
 const input$ = fromEvent<KeyboardEvent>( document, 'keyup' )
 
 input$.pipe(
   throttleTime(400, asyncScheduler, {
     leading: false,
     trailing: true,
   }),
   pluck( 'target', 'value' ),
   distinctUntilChanged(), // Para prevenir que se vuelva a enviar la información, ejemplo, alguién escribe algo, borra y vuelve a escribir lo mismo
 ).subscribe( console.log )