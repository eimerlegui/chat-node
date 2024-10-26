
import { IEnv } from '../types/env';
process.loadEnvFile()

const ENV: IEnv = {
	ENV: process.env.ENV || "dev",
	PORT: parseInt(process.env.PORT || "3000", 10),
	URL_BASE: process.env.URL_BASE || "http://localhost:3000",
	SESSION_SECRET: process.env.SESSION_SECRET || "",
	URL_FRONT: process.env.URL_FRONT || "http://localhost:5173",
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
