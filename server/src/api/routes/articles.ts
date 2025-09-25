import express from "express";

import { getArticleById } from "api/controllers/articleController";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the article API!");
});

router.get("/:id", getArticleById);

export default router;
