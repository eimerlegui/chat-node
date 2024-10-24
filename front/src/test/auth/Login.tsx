

import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils";
import axios from "axios";

let userFirebase: any = null

const LoginWithGoogle: React.FC = () => {

	const [userName, setUserName] = React.useState<string>("");
	const [showUserName, setShowUserName] = React.useState<boolean>(false);

	const handleLogin = async () => {
		const provider = new GoogleAuthProvider();

		try {
			const result = await signInWithPopup(auth, provider);
			userFirebase = result.user;
			const user: any = await axios.get("http://localhost:3000/api/auth/login", { params: { uid: userFirebase.uid } });
			console.log("🚀 ~ handleLogin ~ user:", user)
			if(!user?.username) {
				setShowUserName(true);
			}
		} catch (error) {
			console.error("Error en el login con Google:", error);
		}
	};

	const handleRegister = async () => {
		try {
			const response = await axios.post("http://localhost:3000/api/auth/register", { uid: userFirebase.uid, username: userName, providerId: userFirebase.providerData[0].providerId });
			console.log(response);
		} catch (error) {
			console.error("Error en el registro:", error);
		}
	}

	return (
		<>
			<button onClick={handleLogin}>
				Iniciar sesión con Google
			</button>
			{ showUserName && <>
				<input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
				<button onClick={handleRegister}>Registrar</button>
			</> }
		</>
	);
};

export default LoginWithGoogle;