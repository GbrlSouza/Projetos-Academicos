export interface GanttTask {
  id: string;
  name: string;
  progress: number;
}

export interface GanttChartElement extends HTMLElement {
  data: GanttTask[];
}