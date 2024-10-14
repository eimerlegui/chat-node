import { IEnv } from "./config";

const E = import.meta.env;

export const ENV: IEnv = {
	URL_BACK: E?.VITE_URL_BACK ?? "http://localhost:3000",
}