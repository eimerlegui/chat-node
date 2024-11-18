
import express from "express";
import { routerAuth } from "../api/auth/routes";
import { routerUser } from "../api/users/routes";

export const mainRouter = express.Router();

mainRouter.use(routerAuth)
mainRouter.use(routerUser)
