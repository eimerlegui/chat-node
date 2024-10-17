import { IEnv } from "./config";

const E = import.meta.env;

export const ENV: IEnv = {
	URL_BACK: E?.VITE_URL_BACK ?? "http://localhost:3000",
	FIREBASE: {
		API_KEY: E?.VITE_API_KEY ?? "",
		AUTH_DOMAIN: E?.VITE_AUTH_DOMAIN ?? "",
		PROJECT_ID: E?.VITE_PROJECT_ID ?? "",
		STORAGE_BUCKET: E?.VITE_STORAGE_BUCKET ?? "",
		MESSAGING_SENDER_ID: E?.VITE_MESSAGING_SENDER_ID ?? "",
		APP_ID: E?.VITE_APP_ID ?? ""
	},
}