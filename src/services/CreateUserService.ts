import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from 'bcrypt'

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const UsersRepository = getCustomRepository(UsersRepositories);

    if (!email) throw new Error("Invalid email");
    if (!password) throw new Error("Invalid password");

    const userExists = await UsersRepository.findOne({ email });

    if (userExists) throw new Error("User already exists");

    const hashedPassword = await hash(password, 10)

    const user = UsersRepository.create({
      name,
      email,
      admin,
      password: hashedPassword,
    });

    await UsersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
