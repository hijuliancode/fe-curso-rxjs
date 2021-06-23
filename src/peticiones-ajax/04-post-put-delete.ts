import { ajax, AjaxError } from "rxjs/ajax";

const urlApi = "https://httpbin.org/delay/1";
// const urlApi = 'https://httpbin.org/ERRORdelay/1' // ERROR

// get(url, headers)
ajax.get(urlApi, {}).subscribe((resp) => {
  console.log(".get resp=>", resp);
});

// post(url, body, headers)
ajax
  .post(
    urlApi,
    {
      id: 1,
      nombre: "Julian",
    },
    { "mi-token": "abc123" }
  )
  .subscribe((resp) => console.log(".post resp=>", resp));

// put(url, body, headers)
ajax
  .put(
    urlApi,
    {
      id: 1,
      nombre: "Julian",
    },
    { "mi-token": "abc123" }
  )
  .subscribe((resp) => console.log(".put resp=>", resp));

// delete(url, headers)
ajax.delete(urlApi, { "mi-token": "abc123" }).subscribe((resp) => {
  console.log(".delete resp=>", resp);
});

// Otra forma de hacerlo

ajax({
  url: urlApi,
  method: "DELETE",
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Julian",
  },
}).subscribe((resp) => {
  console.log("ajax.({}) response", resp);
});
