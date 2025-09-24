// src/app.ts
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import articleRoutes from "./api/routes/articleRoutes";
import categoryRoutes from "./api/routes/categoryRoutes";
import { errorHandler } from "./utils/errorHandler";

const app: Application = express();

// Middleware
app.use(cors({ origin: "http://yourfrontend.com" }));
app.use(bodyParser.json());

// Routes
app.use("/api/v1/articles", articleRoutes);
app.use("/api/v1/categories", categoryRoutes);

// Error Handling
app.use(errorHandler);

export default app;
