import { ajax } from "rxjs/ajax";

// const urlApi = 'https://api.github.com/users?per_page5'
const urlApi = 'https://httpbin.org/delay/1'

const obs$ = ajax.getJSON(urlApi, {
  'Content-Type': 'application/json',
  'mi-token': 'ABC123'
})

obs$.subscribe(data => console.log('data', data))
