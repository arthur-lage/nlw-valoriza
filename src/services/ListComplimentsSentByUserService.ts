import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListComplimentsSentByUserService {
  async execute(user_id: string) {
    if (!user_id) throw new Error("Invalid user id");

    const ComplimentsRepository = getCustomRepository(ComplimentsRepositories);

    const messagesFromUser = await ComplimentsRepository.find({
      where: { user_sender: user_id },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return messagesFromUser;
  }
}

export { ListComplimentsSentByUserService };
