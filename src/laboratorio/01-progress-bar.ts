import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators'

const text = document.createElement('div')
text.innerHTML = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet sapien libero, nec laoreet tortor suscipit id. Morbi placerat magna non mauris luctus, vitae euismod diam posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum eget ante aliquet, tincidunt eros nec, pulvinar arcu. Suspendisse fringilla urna ex, sit amet scelerisque nibh commodo et. Vestibulum eleifend sapien id dolor blandit cursus. Aliquam mollis et odio vel molestie. Vivamus at risus nibh. Curabitur ornare pulvinar convallis. Integer sit amet tincidunt erat, eu faucibus enim. Maecenas nec luctus lacus. Nunc id sollicitudin lacus. Nullam malesuada erat libero, id lacinia nibh laoreet eu. Etiam varius est nec consequat molestie. Pellentesque tempor auctor hendrerit.
  <br/><br/>
  Morbi aliquam tincidunt massa ac vulputate. Curabitur cursus egestas massa, ut varius justo sollicitudin et. Nunc eget accumsan purus. Pellentesque et pretium est, a egestas augue. Nullam magna diam, laoreet id ultrices ac, feugiat a quam. Mauris faucibus nec dui eu scelerisque. Maecenas quam arcu, finibus sit amet sem et, efficitur lobortis nulla. Mauris malesuada metus ac sagittis efficitur. Aliquam erat volutpat. Vivamus vehicula, felis non porta pretium, ipsum lorem dignissim diam, in finibus elit sem vel justo. Cras sed felis eros. Cras ut consequat odio.
  <br/><br/>
  Sed ullamcorper mollis est nec egestas. Aliquam vel ex vitae dui consectetur rhoncus. Duis leo neque, rutrum vel mattis ac, fermentum vel ante. Nam faucibus consectetur nisi sed cursus. Sed et enim metus. Fusce viverra leo eget turpis pretium sagittis. Integer in vulputate enim, eget mollis arcu. Pellentesque a dolor nulla. Quisque vel pretium sem. Nam sit amet lectus non augue faucibus egestas nec vitae quam. Aliquam non tellus at neque tincidunt laoreet eget lobortis eros. Nunc ut arcu ac nulla dictum convallis. Mauris feugiat risus metus, a semper purus tempus nec. Donec non felis justo. Fusce iaculis tellus lobortis, fermentum lacus sollicitudin, maximus diam. Vestibulum quis enim ligula.
  <br/><br/>
  Duis nibh orci, volutpat nec placerat nec, interdum ac erat. Sed in bibendum elit. Curabitur sagittis ipsum sit amet arcu volutpat, eget consectetur eros elementum. Phasellus euismod, urna et tristique auctor, neque elit volutpat est, ac malesuada quam nunc vitae ipsum. Donec eleifend eros eget consectetur lobortis. Mauris quis rhoncus ipsum, ut lobortis justo. Sed sit amet posuere dolor. Vestibulum non viverra purus, in lobortis lectus. Phasellus lacinia, libero sit amet ultrices tempus, mi urna porta risus, ac gravida tortor nisi ut arcu. Vivamus tristique dolor sit amet aliquam malesuada. Suspendisse vel vestibulum neque. Quisque ultricies ex felis, eget suscipit justo hendrerit non. In eu scelerisque ex. Vestibulum vulputate feugiat nibh, non placerat nibh egestas a. Vestibulum facilisis erat mattis mi pretium pharetra.
  <br/><br/>
  Cras gravida felis vitae elit lacinia tempus. Donec eget tristique ante, sed mattis nibh. Praesent turpis sem, convallis vitae tellus id, rhoncus faucibus enim. Suspendisse potenti. Vivamus tempor bibendum elit eu convallis. Cras dui sapien, commodo at luctus a, vehicula a felis. Aliquam convallis est vel euismod iaculis. Sed nunc mauris, lacinia nec vulputate quis, consequat ut sapien. Suspendisse elementum nulla felis, sed posuere justo dignissim at. Nunc sit amet augue turpis. Morbi laoreet tortor eu dignissim viverra. Praesent ac bibendum nibh. Proin sollicitudin fermentum orci quis molestie. Mauris nec sem dolor. Suspendisse porta at risus semper feugiat.
`;

const main = document.querySelector('main');

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')

main.append( text )
main.append( progressBar )

// Función que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { 
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  // console.log({scrollTop, scrollHeight, clientHeight,})

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams

const scroll$ = fromEvent(document, 'scroll')
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
  map( calcularPorcentajeScroll ),
  tap(console.log)
)


progress$.subscribe( porcentaje => {
  progressBar.style.width = `${ porcentaje }%`
} )