import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { tag_id, user_receiver, message } = req.body;

    const user_sender = req.user_id

    const service = new CreateComplimentService();

    const compliment = await service.execute({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    return res.json(compliment);
  }
}

export { CreateComplimentController };
