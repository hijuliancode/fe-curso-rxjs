import { asyncScheduler } from "rxjs";

/**
 * Podemos simular :
 * setTimeout(() => {}, 3000)
 * setInterval(() => {}, 3000)
 */

const saludar = () => console.log(`Hola `)
const saludar2 = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);


console.log('inicio...');

// Simular setTimeOut(() => {}, 3000)

// asyncScheduler.schedule(saludar, 3000)
// const state = {
//   nombre: 'Valentina',
//   apellido: 'Sosa'
// }
// asyncScheduler.schedule(saludar2, 3000, state)

// Simular setInterval(() => {}, 3000)
// La función debe no debe ser función de flecha

const state = {
  count: 0
}

asyncScheduler.schedule( function({ count }) {
  console.log(`state.count ${count} `)

  count += 1

  this.schedule({ count }, 500)
}, 3000, state )

console.log('...fin');
