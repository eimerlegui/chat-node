
interface IDB {
	DIALECT: 'mysql' | 'sqlite' | 'postgres' | 'mssql';
	HOST: string;
	PORT: number;
	USERNAME: string;
	PASSWORD: string;
	DATABASE: string;
}

export interface IEnv {
	ENV: string;
	PORT: number;
	DB: IDB;

	URL_BASE: string;
	SESSION_SECRET: string;
	URL_FRONT: string;
}