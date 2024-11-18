import { Router } from "express";
import { searchUsers } from "../controllers";

export const routerUser = Router();

routerUser.get("/users/search", searchUsers);