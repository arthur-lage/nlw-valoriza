import { Request, Response, NextFunction } from "express";

function EnsureAdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const admin = false;

  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "Unauthorized",
  });
}

export { EnsureAdminMiddleware };
