import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({ error: "Internal Server Error" });
}

export { errorHandler };
