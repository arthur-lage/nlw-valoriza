import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: IComplimentRequest) {
    if (!user_sender) throw new Error("Invalid User Sender");

    if (!user_receiver) throw new Error("Invalid User Receiver");

    if (!tag_id) throw new Error("Invalid Tag ID");

    if (!message) throw new Error("Invalid Message");

    const ComplimentRepository = getCustomRepository(ComplimentsRepositories);
    const UsersRepository = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver)
      throw new Error("User Sender can not be the same as User Receiver");

    const userReceiverExists = UsersRepository.findOne(user_receiver);

    if (!userReceiverExists) throw new Error("User Receiver does not exist!");

    const compliment = ComplimentRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    await ComplimentRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
