import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { Request, Response } from "express";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const service = new AuthenticateUserService();

    const token = await service.execute({ email, password });

    return res.json(token);
  }
}

export { AuthenticateUserController };
