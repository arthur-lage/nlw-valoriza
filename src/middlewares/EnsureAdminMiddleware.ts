import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

async function EnsureAdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;

  const UsersRepository = getCustomRepository(UsersRepositories)

  const user = await UsersRepository.findOne({
    id: user_id
  })

  const isAdmin = user?.admin

  if (isAdmin) {
    return next();
  }

  return res.status(401).json({
    error: "Unauthorized",
  });
}

export { EnsureAdminMiddleware };
