export interface ColumnStatus {
  name: string;
  type: string;
}
export interface Table {
  id: string;
  columnsFragment: string;
  columns: ColumnStatus[];
}

export interface TableStatus {
  name: string;
  table: Table;
  columns: ColumnStatus[];
  isCreated: boolean;
}
