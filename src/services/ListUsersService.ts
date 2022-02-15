import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserService {
  async execute() {
    const UsersRepository = getCustomRepository(UsersRepositories);

    const users = await UsersRepository.find();

    return classToPlain(users);
  }
}

export { ListUserService };
