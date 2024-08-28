import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';
import axios from 'axios';

const socket = io("/");

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
		setMessage("");
		socket.emit("message", message);
	};

	const sendTyping = () => {
		socket.emit("typing");
	};

	const handleLogin = () => {
		// axios.get("http://localhost:3000/auth/google")
		window.open("http://localhost:3000/auth/google/callback", "_self")
	}

	const handleLogout = () => {
		axios.get("http://localhost:3000/auth/logout")
	}

	return (
		<>
			{ typing?.typing && <p>Eimer está escribiendo</p>}
			<br />
			<hr />
			{messages.map((msg, i) =>
				<p className='border border-red-500' key={i}> - {msg.data}</p>
			)}
			<form onSubmit={handleOnSubmit}>
				<input type="text" value={message} onChange={e => setMessage(e.target.value)} onInput={sendTyping} />
				<button>Send</button>
			</form>
			<br /><br /><br />
			<hr />
			<button onClick={handleLogin}>Login Google</button>
			<button onClick={handleLogout}>Logout</button>

		</>
	)
}

export default App
