import { Router } from "express";
import { login } from "../controllers";

export const routerAuth = Router();

routerAuth.get("/eimer", login)