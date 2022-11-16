import { CountUnit } from "..";

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
  count_unit: CountUnit;
  dataset_version: number;
}

export type EmployeeId = string;

export interface Row_Receipt extends PersistentRow {
  dataset_id: number;
  section_id: string;
  article_id: string;
  article_count: number;
  by_user: EmployeeId;
  at_seconds: number;
}

export interface Row_Emission extends PersistentRow {
  dataset_id: number;
  section_id: string;
  article_id: string;
  article_count: number;
  by_user: EmployeeId;
  at_seconds: number;
}
