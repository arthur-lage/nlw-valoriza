import { Request, Response, NextFunction } from "express";

function ErrorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    error: "Internal Server Error",
  });
}

export { ErrorHandlerMiddleware };
