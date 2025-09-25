import { query } from "@database";

import { Article } from "api/models/Article";

const findArticleById = async (id: string): Promise<Article> => {
  const article = await query<Article>("SELECT * FROM articles WHERE id = ?", [
    id,
  ]);
  return article[0];
};

export { findArticleById };
