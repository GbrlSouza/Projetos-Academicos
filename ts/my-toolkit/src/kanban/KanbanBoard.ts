import { KanbanColumn } from "./types";

export class KanbanBoard extends HTMLElement {
  private columns: KanbanColumn[] = [];

  connectedCallback() {
    this.classList.add("d-flex", "gap-3");
    this.render();
  }

  set data(value: KanbanColumn[]) {
    this.columns = value;
    this.render();
  }

  render() {
    this.innerHTML = this.columns
      .map(
        col => `
      <div class="card" style="width: 250px">
        <div class="card-header bg-primary text-white">
          ${col.name}
        </div>
        <ul class="list-group list-group-flush">
          ${col.cards
            .map(card => `<li class="list-group-item">${card.title}</li>`)
            .join("")}
        </ul>
      </div>
    `
      )
      .join("");
  }
}

customElements.define("kanban-board", KanbanBoard);
