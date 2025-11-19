export interface KanbanCard {
  id: string;
  title: string;
}

export interface KanbanColumn {
  id: string;
  name: string;
  cards: KanbanCard[];
}

export interface KanbanBoardData {
  columns: KanbanColumn[];
}

export interface KanbanBoardElement extends HTMLElement {
  data: KanbanColumn[];
}
