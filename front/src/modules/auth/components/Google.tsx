

import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { authFirebase } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { HttpClient } from "@/Http";

let userFirebase: User | null = null

export const Google: React.FC = () => {

	const [userName, setUserName] = useState<string>("");
	const [showUserName, setShowUserName] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleLogin = async () => {
		const provider = new GoogleAuthProvider();

		try {
			const result = await signInWithPopup(authFirebase, provider);
			userFirebase = result.user;
			const user = await HttpClient.get<any>("auth/login", { uid: userFirebase.uid });

			console.log("🚀 ~ handleLogin ~ user:", user)
			if(!user?.username) {
				setShowUserName(true);
			} else {
				navigate("/general")
			}
		} catch (error) {
			console.error("Error en el login con Google:", error);
		}
	};

	const handleRegister = async () => {
		try {
			if(!userFirebase) return
			const response = await HttpClient.post<any>(
				"auth/register",
				{ uid: userFirebase.uid, username: userName, providerId: userFirebase.providerData[0].providerId }
			)
			console.log(response);
		} catch (error) {
			console.error("Error en el registro:", error);
		}
	}

	return (
		<>
			{ !showUserName && <button onClick={handleLogin}>Login con Google</button> }
			{ showUserName && <>
				<input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
				<button onClick={handleRegister}>Registrar</button>
			</> }
		</>
	);
};