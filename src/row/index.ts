import { ValueType, ValueUnit } from "jm-castle-types";
import { CountUnit } from "../index.js";

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
  short_id: string;
  name: string;
  image_refs: string | null;
}

export interface Row_Article extends Row_Masterdata {
  article_id: string;
  name: string;
  manufacturer: string;
  hashtags: string | null;
  www_link: string | null;
  count_unit: CountUnit;
  image_refs: string | null;
  attributes: string | null;
}

export type AttributeValue = number | string | boolean | null | undefined;

export interface Row_Attribute extends Row_Masterdata {
  attribute_id: string;
  name: string;
  value_type: ValueType;
  value_unit: ValueUnit | null;
}

export interface Row_Hashtag extends Row_Masterdata {
  tag_id: string;
  name: string;
}

export interface Row_Receiver extends Row_Masterdata {
  receiver_id: string;
  name: string;
  mail_address: string;
}

export interface Row_Manufacturer extends Row_Masterdata {
  manufacturer_id: string;
  name: string;
}

export interface Row_Costunit extends Row_Masterdata {
  unit_id: string;
  name: string;
}

export type EmployeeId = string;

export const ReceiptReasons = {
  buy: { name: "Einkauf" },
  loanEnd: { name: "Leihende" },
  build: { name: "Eigenbau" },
  shift: { name: "Umgelagert" },
  inventory: { name: "Inventur" },
};

export const EmissionReasons = {
  sale: { name: "Verkauf" },
  loan: { name: "Ausleihe" },
  broken: { name: "Kaputt" },
  shift: { name: "Umgelagert" },
  inventory: { name: "Inventur" },
};

export const ReceiptRequestReasons = {
  order: { name: "Bestellung" },
};

export const EmissionRequestReasons = {
  reservation: { name: "Reservierung" },
};

export type EmissionReason = keyof typeof EmissionReasons;

export type ReceiptReason = keyof typeof ReceiptReasons;

export type EmissionRequestReason = keyof typeof EmissionRequestReasons;

export type ReceiptRequestReason = keyof typeof ReceiptRequestReasons;
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
  reason: ReceiptReason;
  price: number | null;
  cost_unit: string;
}

export interface Row_Emission {
  dataset_id: number | "new";
  section_id: string;
  article_id: string;
  article_count: number;
  by_user: EmployeeId;
  emitted_at: number;
  reason: EmissionReason;
  receiver: string;
  price: number | null;
  cost_unit: string;
  image_refs: string | null;
}

export interface Row_ReceiptRequest {
  dataset_id: number | "new";
  section_id: string;
  article_id: string;
  article_count: number;
  www_link: string | null;
  guaranty_to: number | null;
  image_refs: string | null;
  by_user: EmployeeId;
  requested_at: number;
  reason: ReceiptRequestReason;
  receiver: string;
}

export interface Row_EmissionRequest {
  dataset_id: number | "new";
  section_id: string;
  article_id: string;
  article_count: number;
  by_user: EmployeeId;
  requested_at: number;
  reason: EmissionRequestReason;
  receiver: string;
}
