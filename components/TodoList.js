import { createElement } from "../functions/dom.js"

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
    <input required="" class="form-control" type="text" placeholder= "Jspquoimettre" name="title">
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

    <ul class="list-group"></ul>
  </main>`
    const list = element.querySelector('.list-group')
    for (let todo of this.#todos) {
      const t = new TodoListItem(todo)
      t.appendTo(list)
    }
    element.querySelector('form').addEventListener('submit', e => this.onSubmit(e))
  }
  /**
   * @param {SubmitEvent} e
   */

  onSubmit(e) {
    e.preventDefault()
    const title = new FormData(e.currentTarget).get('title').toString().trim()
    console.log(title)
    if (title === '') {
      return
    }
    const todo = {
      id: Date.now(),
      title,
      completed: false
    }
    const item = new TodoListItem(todo)
    item.appendTo
  }
}

class TodoListItem {

  #element

  /** @type {Todo} */

  constructor(todo) {
    const id = `todo-${todo.id}`
    const li = createElement('li', {
      class: 'todo list-group-item d-flex align-items-center'
    })
    const checkbox = createElement('input', {
      type: 'checkbox',
      class: 'form-check-input',
      id,
      checked: todo.completed ? '' : null
    })
    const label = createElement('label', {
      class: 'ms-2 form-check-label',
      for: id
    })
    label.innerText = todo.title
    const button = createElement('button', {
      class: 'ms-auto btn btn-danger btn-sm'
    })
    button.innerHTML = '<i class="bi-trash"></i>'

    li.append(checkbox)
    li.append(label)
    li.append(button)

    button.addEventListener('click', e => this.remove(e))

    this.#element = li
  }

  /**
   * @param {HTMLElement} element 
  */
  appendTo(element) {
    element.append(this.#element)
  }

  /**
   * @param {PointerEvent} e
  */
  remove(e) {
    e.preventDefault()
    this.#element.remove()
  }
}