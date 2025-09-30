import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the category API!");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fetching category with ID: ${id}`);
});

export default router;
