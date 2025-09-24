import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the user API!");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fetching user with ID: ${id}`);
});

export default router;
