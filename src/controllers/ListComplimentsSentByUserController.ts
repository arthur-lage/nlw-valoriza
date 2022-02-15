import { ListComplimentsSentByUserService } from "../services/ListComplimentsSentByUserService";
import { Request, Response } from "express";

class ListComplimentsSentByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const service = new ListComplimentsSentByUserService();

    const complimentsSentByUser = await service.execute(user_id);

    return res.json(complimentsSentByUser);
  }
}

export { ListComplimentsSentByUserController };
