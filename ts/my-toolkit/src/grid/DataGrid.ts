import { GridColumn, GridRow } from "./types";

export class DataGrid extends HTMLElement {
  private columns: GridColumn[] = [];
  private rows: GridRow[] = [];

  set config(value: { columns: GridColumn[]; rows: GridRow[] }) {
    this.columns = value.columns;
    this.rows = value.rows;
    this.render();
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
            ${this.columns.map(c => `<th>${c.header}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${this.rows
            .map(
              row => `
            <tr>
              ${this.columns
                .map(col => `<td>${row[col.field]}</td>`)
                .join("")}
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }
}

customElements.define("data-grid", DataGrid);
