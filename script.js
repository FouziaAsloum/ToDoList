import { fetchJSON } from "./functions/api.js";

try {
  const todos = await fetchJSON('https://jmmmsonplaceholder.typicode.com/todos?_limit=5')
  const list = new TodoList(todos)
  list.apendTo(documents.querySelector('#todolist'))


} catch (e) {
  const divAlert = createElement('div', {
    class: 'alert alert-danger m-2',
    role: 'alert'
  })
  divAlert.innerText = 'Impossible de charger les éléments'
  document.body.prepend(divAlert) // prepend inverse de append
}