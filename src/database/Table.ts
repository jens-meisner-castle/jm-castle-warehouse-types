export interface Table {
  id: string;
  columnsFragment: string;
}

export interface TableStatus {
  name: string;
  table: Table;
  columns: { name: string }[];
  isCreated: boolean;
}
