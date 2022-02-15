import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListComplimentsSentByUserController } from "./controllers/ListComplimentsSentByUserController";
import { ListComplimentsReceivedByUserController } from "./controllers/ListComplimentsReceivedByUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { EnsureAdminMiddleware } from "./middlewares/EnsureAdminMiddleware";
import { EnsureAuthenticatedMiddleware } from "./middlewares/EnsureAuthenticatedMiddleware";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router()

router.get("/compliments/sent", EnsureAuthenticatedMiddleware, new ListComplimentsSentByUserController().handle)
router.get("/compliments/received", EnsureAuthenticatedMiddleware, new ListComplimentsReceivedByUserController().handle)
router.get("/tags", EnsureAuthenticatedMiddleware, new ListTagsController().handle)
router.get("/users", EnsureAuthenticatedMiddleware, new ListUsersController().handle)

router.post("/users", new CreateUserController().handle)
router.post("/tags", EnsureAuthenticatedMiddleware, EnsureAdminMiddleware, new CreateTagController().handle)
router.post("/login", new AuthenticateUserController().handle)
router.post("/compliments", EnsureAuthenticatedMiddleware, new CreateComplimentController().handle)

export { router }