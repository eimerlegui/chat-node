import { Sequelize } from "sequelize";
import { ENV } from "./dotenv";

export const sequelize = new Sequelize({
	dialect: ENV.DB.DIALECT,
	host: ENV.DB.HOST,
	port: ENV.DB.PORT,
	username: ENV.DB.USERNAME,
	password: ENV.DB.PASSWORD,
	database: ENV.DB.DATABASE
})
