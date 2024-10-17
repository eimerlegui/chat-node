

import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils";

const LoginWithGoogle: React.FC = () => {
	const handleLogin = async () => {
		const provider = new GoogleAuthProvider();

		try {
			const result = await signInWithPopup(auth, provider);
			const user = result.user;
			console.log("Usuario logueado:", user);
		} catch (error) {
			console.error("Error en el login con Google:", error);
		}
	};

	return (
		<button onClick={handleLogin}>
			Iniciar sesión con Google
		</button>
	);
};

export default LoginWithGoogle;