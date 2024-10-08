
import dotenv from 'dotenv';
import { IEnv } from './config';

dotenv.config();

const ENV: IEnv = {
	ENV: process.env.ENV || "dev",
	PORT: parseInt(process.env.PORT || "3000", 10),
	CLIENT_ID: process.env.CLIENT_ID || "",
	CLIENT_SECRET: process.env.CLIENT_SECRET || "",
	URL_BASE: process.env.URL_BASE || "http://localhost:3000",
	DB: {
		DIALECT: "mysql",
		HOST: process.env.DB_HOST || "localhost",
		PORT: parseInt(process.env.DB_PORT || "3306", 10),
		USERNAME: process.env.DB_USERNAME || "fullapp",
		PASSWORD: process.env.DB_PASSWORD || "fullapp",
		DATABASE: process.env.DB_NAME || "chat",
	}
}

export { ENV }
