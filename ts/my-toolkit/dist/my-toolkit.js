class a extends HTMLElement {
  constructor() {
    super(...arguments), this.tasks = [];
  }
  connectedCallback() {
    this.innerHTML = `
      <div class="gantt border p-2">
        <h5 class="mb-3">Gantt Chart</h5>
        <div id="gantt-body"></div>
      </div>
    `, this.render();
  }
  set data(e) {
    this.tasks = e, this.render();
  }
  render() {
    const e = this.querySelector("#gantt-body");
    e && (e.innerHTML = this.tasks.map(
      (t) => `
      <div class="mb-2">
        <strong>${t.name}</strong>
        <div class="progress">
          <div class="progress-bar" style="width:${t.progress}%"></div>
        </div>
      </div>
    `
    ).join(""));
  }
}
customElements.define("gantt-chart", a);
class n extends HTMLElement {
  constructor() {
    super(...arguments), this.columns = [];
  }
  connectedCallback() {
    this.classList.add("d-flex", "gap-3"), this.render();
  }
  set data(e) {
    this.columns = e, this.render();
  }
  render() {
    this.innerHTML = this.columns.map(
      (e) => `
      <div class="card" style="width: 250px">
        <div class="card-header bg-primary text-white">
          ${e.name}
        </div>
        <ul class="list-group list-group-flush">
          ${e.cards.map((t) => `<li class="list-group-item">${t.title}</li>`).join("")}
        </ul>
      </div>
    `
    ).join("");
  }
}
customElements.define("kanban-board", n);
class r extends HTMLElement {
  constructor() {
    super(...arguments), this.columns = [], this.rows = [];
  }
  set config(e) {
    this.columns = e.columns, this.rows = e.rows, this.render();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    if (!this.columns.length) {
      this.innerHTML = "<p class='text-muted'>No data</p>";
      return;
    }
    this.innerHTML = `
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            ${this.columns.map((e) => `<th>${e.header}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(
      (e) => `
            <tr>
              ${this.columns.map((t) => `<td>${e[t.field]}</td>`).join("")}
            </tr>
          `
    ).join("")}
        </tbody>
      </table>
    `;
  }
}
customElements.define("data-grid", r);
const i = [
  { id: "1", name: "Planejamento", progress: 80 },
  { id: "2", name: "Design", progress: 45 },
  { id: "3", name: "Desenvolvimento", progress: 20 }
], l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ganttMock: i
}, Symbol.toStringTag, { value: "Module" })), o = [
  {
    id: "todo",
    name: "A Fazer",
    cards: [
      { id: "1", title: "Criar layout" },
      { id: "2", title: "Configurar ambiente" }
    ]
  },
  {
    id: "doing",
    name: "Fazendo",
    cards: [{ id: "3", title: "Desenvolvendo componentes" }]
  },
  {
    id: "done",
    name: "Finalizado",
    cards: []
  }
], c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  kanbanMock: o
}, Symbol.toStringTag, { value: "Module" })), d = {
  columns: [
    { header: "ID", field: "id" },
    { header: "Nome", field: "name" },
    { header: "Status", field: "status" }
  ],
  rows: [
    { id: 1, name: "Tarefa A", status: "Aberta" },
    { id: 2, name: "Tarefa B", status: "Em Progresso" },
    { id: 3, name: "Tarefa C", status: "Concluída" }
  ]
}, m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  gridMock: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  r as DataGrid,
  a as GanttChart,
  l as GanttMock,
  m as GridMock,
  n as KanbanBoard,
  c as KanbanMock
};
