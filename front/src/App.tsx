import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';
import { ENV } from './config/dotenv';
import LoginWithGoogle from './test/auth/Login';
// const IOUrl = import.meta.env.VITE_URL_BACK;
// import axios from 'axios';

const socket = io(ENV.URL_BACK);

function App() {

	const [typing, setTyping] = useState<{id: string, typing: boolean}>();
	const [message, setMessage] = useState<string>("");
	const [messages, setMessages] = useState<{id: string, data: string}[]>([]);

	let timer: any = null;

	useEffect(() => {
		socket.on("message", (data) => {
			receiveMessage(data);
		})
		socket.on("typing", (data) => {
			setTyping({ id: data.id, typing: true})
			if (timer) clearTimeout(timer)
			timer = setTimeout(() => {
				setTyping({ id: "", typing: false})
			}, 1000)
		})
	}, []);

	useEffect(() => {

	},[typing])

	const receiveMessage = (data: any) => {
		setMessages((prev) => [...prev, data]);
	};

	const handleOnSubmit = (e: any) => {
		e.preventDefault();
		setMessages((prev) => [...prev, {data: message, id: 'null'}]);
		socket.emit("message", message);
		setMessage("");
	};

	const sendTyping = () => {
		socket.emit("typing");
	};

	// const handleLogin = () => {
	// 	// axios.get("http://localhost:3000/auth/google")
	// 	window.open("http://localhost:3000/auth/google/callback", "_self")
	// }

	// const handleLogout = () => {
	// 	axios.get("http://localhost:3000/auth/logout")
	// }

	return (
		<>
			<LoginWithGoogle />
			{ typing?.typing && <p>Eimer está escribiendo</p>}
			<br />
			<hr />
			{messages.map((msg, i) =>
				<p className='border mt-3' style={{borderColor: msg.id === 'null' ? 'blue' : 'red'}} key={i}> - {msg.data}</p>
			)}
			<form onSubmit={handleOnSubmit}>
				<input type="text" value={message} onChange={e => setMessage(e.target.value)} onInput={sendTyping} />
				<button>Send</button>
			</form>
			<br /><br /><br />
			<hr />
			{/* <button onClick={handleLogin}>Login Google</button> */}
			{/* <button onClick={handleLogout}>Logout</button> */}

		</>
	)
}

export default App
