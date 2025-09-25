import { type AppError } from "./types";

const createError = (
  statusCode: number,
  message: string,
  code?: string
): AppError => {
  const error = new Error(message) as AppError;
  error.statusCode = statusCode;
  if (code) error.code = code;
  return error;
};

const createNotFoundError = (message = "Resource not found"): AppError =>
  createError(404, message, "NOT_FOUND");

const createUnauthorizedError = (message = "Unauthorized"): AppError =>
  createError(401, message, "UNAUTHORIZED");
const createBadRequestError = (message = "Bad request"): AppError =>
  createError(400, message, "BAD_REQUEST");

export {
  createError,
  createNotFoundError,
  createUnauthorizedError,
  createBadRequestError,
};
