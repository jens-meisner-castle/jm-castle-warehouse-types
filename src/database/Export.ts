import {
  Row_Article,
  Row_Attribute,
  Row_Costunit,
  Row_Emission,
  Row_EmissionRequest,
  Row_Hashtag,
  Row_ImageContent,
  Row_ImageReference,
  Row_Manufacturer,
  Row_Receipt,
  Row_ReceiptRequest,
  Row_Receiver,
  Row_Store,
  Row_StoreSection,
} from "../row/index.js";

export interface DbExportData {
  version: { software: string; db: string };
  tables: {
    attribute: { rows: Row_Attribute[] };
    hashtag: { rows: Row_Hashtag[] };
    manufacturer: { rows: Row_Manufacturer[] };
    costunit: { rows: Row_Costunit[] };
    receiver: { rows: Row_Receiver[] };
    imageReference: { rows: Row_ImageReference[] };
    imageContent: { rows: Row_ImageContent[] };
    article: { rows: Row_Article[] };
    store: { rows: Row_Store[] };
    storeSection: { rows: Row_StoreSection[] };
    receipt: { rows: Row_Receipt[] };
    emission: { rows: Row_Emission[] };
    receiptRequest: { rows: Row_ReceiptRequest[] };
    emissionRequest: { rows: Row_EmissionRequest[] };
  };
}

export type DbImportData = {
  tables: Record<
    keyof DbExportData["tables"],
    { inserted: number; updated: number }
  >;
};

export interface ImportResult {
  database: DbImportData;
  images: { inserted: number; updated: number };
}
