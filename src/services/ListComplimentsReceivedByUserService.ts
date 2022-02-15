import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListComplimentsReceivedByUserService {
  async execute(user_id: string) {
    if (!user_id) throw new Error("Invalid user id");

    const ComplimentsRepository = getCustomRepository(ComplimentsRepositories);

    const messagesToUser = await ComplimentsRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return messagesToUser;
  }
}

export { ListComplimentsReceivedByUserService };
