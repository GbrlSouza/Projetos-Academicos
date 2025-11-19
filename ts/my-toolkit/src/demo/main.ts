const gantt = document.querySelector("gantt-chart");
gantt!.data = [
  { id: "1", name: "Teste 1", progress: 40 }
];

const kanban = document.querySelector("kanban-board");
kanban!.data = [
  {
    id: "todo",
    name: "A Fazer",
    cards: [{ id: "1", title: "Teste Kanban" }]
  }
];

const grid = document.querySelector("data-grid");
grid!.data = {
  columns: [
    { header: "ID", field: "id" },
    { header: "Nome", field: "name" }
  ],
  rows: [{ id: 1, name: "Teste Grid" }]
};
