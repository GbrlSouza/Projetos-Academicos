import type { KanbanBoardElement } from "../kanban/types";
import type { GanttChartElement } from "../gantt/types";
import type { DataGridElement } from "../grid/types";

declare global {
  interface HTMLElementTagNameMap {
    "kanban-board": KanbanBoardElement;
    "gantt-chart": GanttChartElement;
    "data-grid": DataGridElement;
  }
}

export {};
