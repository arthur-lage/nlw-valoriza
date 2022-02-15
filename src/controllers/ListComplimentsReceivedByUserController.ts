import { ListComplimentsReceivedByUserService } from "../services/ListComplimentsReceivedByUserService";
import { Request, Response } from "express";

class ListComplimentsReceivedByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const service = new ListComplimentsReceivedByUserService();

    const complimentsReceivedByUser = await service.execute(user_id);

    return res.json(complimentsReceivedByUser);
  }
}

export { ListComplimentsReceivedByUserController };
