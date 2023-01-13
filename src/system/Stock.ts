import { Row_Article, Row_StoreSection } from "../row";

export interface StockStateCounts {
  physicalCount: number;
  availableCount: number;
}

export interface ArticleStockState {
  article: Row_Article;
  states: Array<
    {
      section: Row_StoreSection;
    } & StockStateCounts
  >;
}
export interface SectionStockState {
  section: Row_StoreSection;
  states: Array<
    {
      article: Row_Article;
    } & StockStateCounts
  >;
}
