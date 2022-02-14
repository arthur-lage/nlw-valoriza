import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    if (!email) throw new Error("Invalid email");
    if (!password) throw new Error("Invalid password");

    const UsersRepository = getCustomRepository(UsersRepositories);

    const emailExists = await UsersRepository.findOne({
      email,
    });

    if (!emailExists) throw new Error("Wrong email or password");

    const isPasswordValid = await compare(password, emailExists.password);

    if (!isPasswordValid) throw new Error("Wrong email or password");

    const token = sign(
      {
        email: emailExists.email,
      },
      String(process.env.JWT_SECRET),
      {
        subject: emailExists.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
