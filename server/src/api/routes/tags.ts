import express, { type Router } from "express";

const router: Router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the tags API!");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fetching tag with ID: ${id}`);
});

export default router;
