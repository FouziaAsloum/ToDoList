/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {number} title
 * @property {boolean} completed
 */

export class TodoList {

  /** @type {Todo[]} */
  #todos = []


  /** @param {Todo[]} */

  constructor(todos) {
    this.#todos = todos
  }



  /** @param {HTMLElement} element */

  appendTo(element) {
    element.innerHTML = ` 
  <form class="d-flex pb-4">
    <input required="" class="form-control" type="text" name="" id="">
    <button type="button" class="btn btn-outline-primary">Ajouter</button>
  </form>

  <main>
    <div class="container">
      <div class="todolistItem">
        <div class="d-grid gap-2 d-md-block"></div>
        <button type="button" class="btn btn-outline-primary">Toutes</button>
        <button type="button" class="btn btn-outline-primary">A faire</button>
        <button type="button" class="btn btn-outline-primary">Faites</button>
      </div>
    </div>

    <ul class="list-group">
      <li class="todo list-group-item d-flex align-items-center is-completed"><input class
        type="checkbox" id="todo-2599"
        for="todo-2599>Etudier
    </ul>
  </main>`
  }
}