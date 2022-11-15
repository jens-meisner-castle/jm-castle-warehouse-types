export type PersistentRow = Record<string, unknown>;

export interface Row_Store extends PersistentRow {
  store_id: string;
  name: string;
}

export interface Row_StoreSection extends PersistentRow {
  store_id: string;
  section_id: string;
  name: string;
}

export interface Row_Article {
  article_id: string;
  name: string;
  count_unit: string;
}

export type EmployeeId = string;

export interface Row_Receipt {
  section_id: string;
  article_id: string;
  count: number;
  by: EmployeeId;
  at: number;
}

export interface Row_Emission {
  section_id: string;
  article_id: string;
  count: number;
  by: EmployeeId;
  at: number;
}
