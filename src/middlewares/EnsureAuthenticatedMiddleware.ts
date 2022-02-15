import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

function EnsureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "Token is missing" });

  const [, tokenOnly] = token.split(" ");

  try {
    const { sub } = verify(
      tokenOnly,
      String(process.env.JWT_SECRET)
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}

export { EnsureAuthenticatedMiddleware };
