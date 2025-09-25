import { Request, Response, NextFunction } from "express";

import { findArticleById } from "api/services/articleService";

import { createNotFoundError } from "utils/errors/creators";

const getArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("getArticleById: No ID provided");

    const article = await findArticleById(id);

    if (!article) throw createNotFoundError();

    res.json(article);
  } catch (e) {
    next(e);
  }
};

export { getArticleById };
