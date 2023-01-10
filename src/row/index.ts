import { CountUnit } from "..";

export type PersistentRow = Record<string, unknown>;

export interface Row_Masterdata {
  dataset_version: number;
  created_at: number;
  edited_at: number;
}

export interface Row_ImageReference extends Row_Masterdata {
  image_id: string;
  reference: string;
}

export interface Row_ImageContent extends Row_Masterdata {
  image_id: string;
  image_extension: string;
  width: number;
  height: number;
  size_in_bytes: number;
}

export interface Row_Store extends Row_Masterdata {
  store_id: string;
  name: string;
  image_refs: string | null;
}

export interface Row_StoreSection extends Row_Masterdata {
  store_id: string;
  section_id: string;
  name: string;
  image_refs: string | null;
}

export interface Row_Article extends Row_Masterdata {
  article_id: string;
  name: string;
  hashtags: string | null;
  www_link: string | null;
  count_unit: CountUnit;
  image_refs: string | null;
}

export interface Row_Hashtag extends Row_Masterdata {
  tag_id: string;
  name: string;
}

export type EmployeeId = string;

export interface Row_Receipt {
  dataset_id: number | "new";
  section_id: string;
  article_id: string;
  article_count: number;
  www_link: string | null;
  guaranty_to: number | null;
  image_refs: string | null;
  by_user: EmployeeId;
  receipt_at: number;
}

export interface Row_Emission {
  dataset_id: number | "new";
  section_id: string;
  article_id: string;
  article_count: number;
  by_user: EmployeeId;
  emitted_at: number;
}
