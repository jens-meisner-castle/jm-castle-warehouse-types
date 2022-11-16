export type PersistentRow = Record<string, unknown>;

export interface Row_Store extends PersistentRow {
  store_id: string;
  name: string;
  dataset_version: number;
}

export interface Row_StoreSection extends PersistentRow {
  store_id: string;
  section_id: string;
  name: string;
  dataset_version: number;
}

export interface Row_Article extends PersistentRow {
  article_id: string;
  name: string;
  count_unit: string;
  dataset_version: number;
}

export type EmployeeId = string;

export interface Row_Receipt extends PersistentRow {
  dataset_id: number;
  section_id: string;
  article_id: string;
  count: number;
  by: EmployeeId;
  at: number;
}

export interface Row_Emission extends PersistentRow {
  dataset_id: number;
  section_id: string;
  article_id: string;
  count: number;
  by: EmployeeId;
  at: number;
}
