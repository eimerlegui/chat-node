
import express from "express";
import { routerAuth } from "../api/auth/routes";

export const mainRouter = express.Router();

mainRouter.use(routerAuth)
