import cors from "cors";
import express, { Application } from "express";
import session from "express-session";
import { ENV } from "./dotenv";
import { mainRouter } from "../routes";

export function configApp(app: Application) {

	app.use(express.json());

	app.use(session({
		secret: ENV.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: ENV.ENV === "prod", maxAge: 24 * 60 * 60 * 1000 }
	}))

	app.use(cors({
		origin: ENV.URL_FRONT,
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true
	}))

	app.use("/api",mainRouter)
}