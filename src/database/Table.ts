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
