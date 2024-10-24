import { Router } from "express";
import { login, register } from "../controllers";
import { loginValidator, validate } from "../validators";

export const routerAuth = Router();

routerAuth.get("/auth/login", validate(loginValidator), login);
routerAuth.post("/auth/register", register);