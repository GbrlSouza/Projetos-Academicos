export interface GridColumn {
  header: string;
  field: string;
}

export interface GridRow {
  [key: string]: any;
}

export interface DataGridElement extends HTMLElement {
  data: {
    columns: GridColumn[];
    rows: GridRow[];
  };
}