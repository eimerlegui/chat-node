

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ENV } from "../config/dotenv";

const firebaseConfig = {
	apikey: ENV.FIREBASE.API_KEY,
	authDomain: ENV.FIREBASE.AUTH_DOMAIN,
	projectId: ENV.FIREBASE.PROJECT_ID,
	storageBucket: ENV.FIREBASE.STORAGE_BUCKET,
	messagingSenderId: ENV.FIREBASE.MESSAGING_SENDER_ID,
	appId: ENV.FIREBASE.APP_ID
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar el servicio de autenticación
export const auth = getAuth(app);