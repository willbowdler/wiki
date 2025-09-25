import express, { Application } from "express";
import cors from "cors";

import articleRoutes from "./api/routes/articles";
import categoryRoutes from "./api/routes/categories";
import tagRoutes from "./api/routes/tags";
import userRoutes from "./api/routes/users";

import { errorHandler } from "./utils/errorHandler";

const app: Application = express();

// Middleware
// TODO Look more into cors configuration
app.use(cors({ origin: "http://yourfrontend.com" }));
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

// Routes
app.use("/api/v1/articles", articleRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/tags", tagRoutes);
app.use("/api/v1/users", userRoutes);

// Error Handling
app.use(errorHandler);

export default app;
