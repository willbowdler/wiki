import type { Request, Response, NextFunction } from "express";

import { findArticleById } from "@api/services/articleService";

import {
  createBadRequestError,
  createNotFoundError,
} from "@utils/errors/creators";

const getArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) throw createBadRequestError("No ID Provided!");

    const article = await findArticleById(id);

    if (!article) throw createNotFoundError("Article not found!");

    res.json(article);
  } catch (e) {
    next(e);
  }
};

export { getArticleById };
