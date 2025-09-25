interface AppError extends Error {
  statusCode: number;
  code: string;
}

export type { AppError };
