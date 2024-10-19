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

export function configSequelize() {
	sequelize.authenticate()
	.then(() => console.log("DATA BASE AUTHENTICATE"))
	.catch(err => console.log(err));

	sequelize.sync()
	.then(() => console.log("DATA BASE SYNC"))
	.catch((err) => console.error(err));
}
