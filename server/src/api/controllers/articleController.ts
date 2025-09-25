import { Request, Response, NextFunction } from "express";

import { findArticleById } from "api/services/articleService";

const getArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("getArticleById: No ID provided");

    const article = await findArticleById(id);

    if (!article) throw new Error("getArticleById: 404 Article NOT FOUND");

    res.json(article);
  } catch (e) {
    next(e);
  }
};

export { getArticleById };
