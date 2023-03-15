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

export const AllTableNames = {
  article: "Artikel",
  store: "Lager",
  store_section: "Lagerbereich",
  costunit: "Kostenstelle",
  hashtag: "Hashtag",
  attribute: "Attribut",
  receiver: "Empfänger",
  manufacturer: "Hersteller",
  image_content: "Bilder",
  image_reference: "Referenzen auf Bilder",
  receipt: "Wareneingang",
  emission: "Warenausgang",
  receipt_request: "Anforderung Eingang",
  emission_request: "Anforderung Ausgang",
};

export type TableName = keyof typeof AllTableNames;

export type TableRows = {
  article: Row_Article;
  store: Row_Store;
  store_section: Row_StoreSection;
  costunit: Row_Costunit;
  hashtag: Row_Hashtag;
  attribute: Row_Attribute;
  receiver: Row_Receiver;
  manufacturer: Row_Manufacturer;
  image_content: Row_ImageContent;
  image_reference: Row_ImageReference;
  receipt: Row_Receipt;
  emission: Row_Emission;
  receipt_request: Row_ReceiptRequest;
  emission_request: Row_EmissionRequest;
};
