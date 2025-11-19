import { GanttTask } from "./types";

export class GanttChart extends HTMLElement {
  private tasks: GanttTask[] = [];

  connectedCallback() {
    this.innerHTML = `
      <div class="gantt border p-2">
        <h5 class="mb-3">Gantt Chart</h5>
        <div id="gantt-body"></div>
      </div>
    `;
    this.render();
  }

  set data(value: GanttTask[]) {
    this.tasks = value;
    this.render();
  }

  render() {
    const container = this.querySelector("#gantt-body");
    if (!container) return;

    container.innerHTML = this.tasks
      .map(
        task => `
      <div class="mb-2">
        <strong>${task.name}</strong>
        <div class="progress">
          <div class="progress-bar" style="width:${task.progress}%"></div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

customElements.define("gantt-chart", GanttChart);
