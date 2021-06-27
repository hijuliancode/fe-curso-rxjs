import { fromEvent, interval } from 'rxjs'
import { mergeMap, switchMap } from 'rxjs/operators'

const click$ = fromEvent( document, 'click' )
const interval$ = interval( 750 )

// El mergeMap puede mantener varias suscripciones activas
// en el siguiente ejemplo luego de hacer click, se genera una suscripcion
// que se ejecuta junto a las anteriores

click$.pipe(
  mergeMap( () => interval$ )
)
// .subscribe( console.log )



// El switchMap solo mantiene la ultima suscripion activa, las otras las completa
// En el siguiente ejemplo luego de hacer click, se genera una suscripcion que 
// finaliza las anteriores y solo empieza a ejecutarse la nueva

click$.pipe(
  switchMap( () => interval$ )
)
.subscribe( console.log )


/**
 * Dependiendo de lo que se necesite una u otra es util, si se necesita estar suscrito a cada evento de todas
 * las suscripciones, el mergeMap, si se necesita solo estar atento al evento de la ultima suscripcion entonces el switchMap
 * En el caso de llamar un API, seria mejor el swtichMap, se evitaria llamados innecesarios al api
 */