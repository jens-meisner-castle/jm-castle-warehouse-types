import { Row_Article, Row_StoreSection } from "../row";

export interface ArticleStockState {
  article: Row_Article;
  states: { section: Row_StoreSection; articleCount: number }[];
}
