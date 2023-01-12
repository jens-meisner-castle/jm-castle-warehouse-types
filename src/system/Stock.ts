import { Row_Article, Row_StoreSection } from "../row";

export interface ArticleStockState {
  article: Row_Article;
  states: {
    section: Row_StoreSection;
    physicalCount: number;
    availableCount: number;
  }[];
}

export interface SectionStockState {
  section: Row_StoreSection;
  states: {
    article: Row_Article;
    physicalCount: number;
    availableCount: number;
  }[];
}
