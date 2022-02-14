import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { EnsureAdminMiddleware } from "./middlewares/EnsureAdminMiddleware";

const router = Router()

router.post("/users", new CreateUserController().handle)

router.post("/tags", EnsureAdminMiddleware, new CreateTagController().handle)

router.post("/login", new AuthenticateUserController().handle)

router.post("/compliments", new CreateComplimentController().handle)

export { router }