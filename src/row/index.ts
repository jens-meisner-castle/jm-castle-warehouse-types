import { CountUnit } from "..";

export type PersistentRow = Record<string, unknown>;

export interface Row_Masterdata {
  dataset_version: number;
  created_at: number;
  edited_at: number;
}

export interface Row_Image extends Row_Masterdata {
  image_id: string;
  reference: string;
  image_extension: string;
}

export interface Row_ImageContent {
  image_id: string;
  image_url: string;
}

export interface Row_Store extends Row_Masterdata {
  store_id: string;
  name: string;
}

export interface Row_StoreSection extends Row_Masterdata {
  store_id: string;
  section_id: string;
  name: string;
}

export interface Row_Article extends Row_Masterdata {
  article_id: string;
  name: string;
  count_unit: CountUnit;
  article_img_ref: string;
}

export type EmployeeId = string;

export interface Row_Receipt {
  dataset_id: number | "new";
  section_id: string;
  article_id: string;
  article_count: number;
  by_user: EmployeeId;
  at_seconds: number;
}

export interface Row_Emission {
  dataset_id: number | "new";
  section_id: string;
  article_id: string;
  article_count: number;
  by_user: EmployeeId;
  at_seconds: number;
}
