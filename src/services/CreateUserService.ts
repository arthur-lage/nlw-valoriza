import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const UsersRepository = getCustomRepository(UsersRepositories);

    if (!email) Error("User already exists");

    const userExists = await UsersRepository.findOne({ email });

    if (userExists) throw new Error("User already exists");

    const user = UsersRepository.create({
      name,
      email,
      admin,
    });

    await UsersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
