import type { Request, Response, NextFunction } from "express";

import { logger } from "utils/logger";
import { type AppError } from "./types";

function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.code = err.code || "Something went wrong";

  logger.error(err.message);
  res.status(err.statusCode).json({ error: "Internal Server Error" });
}

export { errorHandler };
