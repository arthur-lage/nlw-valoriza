import { Request, Response } from "express";
import { ListUserService } from "../services/ListUsersService";

class ListUsersController {
  async handle(req: Request, res: Response) {
    const service = new ListUserService();

    const users = await service.execute();

    return res.json(users);
  }
}

export { ListUsersController };
