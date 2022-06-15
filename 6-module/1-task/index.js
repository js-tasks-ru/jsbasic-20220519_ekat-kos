/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #elem = [];
  #rows = [];

  constructor(rows) {
    this.#elem = document.createElement("table");
    this.#rows = rows;
    this.render();
  }

  get elem() {
    return this.#elem;
  }

  get container() {
    return this.#elem;
  }

  render() {

    this.#elem.innerHTML = this.#template();
    this.container.addEventListener("click", this.#removeBtn);
  }

  #removeBtn = (event) => {

    if (event.target.dataset.action != "remove-button") return;
    let td = event.target.closest("tr");
    td.remove();

  }

  #template() {
    return `
    <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>` + this.#rows.map(item => `
  <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
      <td><button data-action="remove-button">X</button></td>
  </tr>`)
        .join("") + `</tbody>`;

  }
}
