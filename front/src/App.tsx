// import { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
// import { ENV } from './config/dotenv';
// import LoginWithGoogle from './test/auth/Login';
import { RouterProvider } from 'react-router-dom';
import routes from './shared/routes';
import './App.css';
// const IOUrl = import.meta.env.VITE_URL_BACK;
// import axios from 'axios';

// const socket = io(ENV.URL_BACK);

function App() {
	return (
		<RouterProvider router={ routes } />
	);
}

// function App2() {

// 	const [typing, setTyping] = useState<{id: string, typing: boolean}>();
// 	const [message, setMessage] = useState<string>("");
// 	const [messages, setMessages] = useState<{id: string, data: string}[]>([]);

// 	let timer: any = null;

// 	useEffect(() => {
// 		socket.on("message", (data) => {
// 			receiveMessage(data);
// 		})
// 		socket.on("typing", (data) => {
// 			setTyping({ id: data.id, typing: true})
// 			if (timer) clearTimeout(timer)
// 			timer = setTimeout(() => {
// 				setTyping({ id: "", typing: false})
// 			}, 1000)
// 		})
// 	}, []);

// 	useEffect(() => {

// 	},[typing])

// 	const receiveMessage = (data: any) => {
// 		setMessages((prev) => [...prev, data]);
// 	};

// 	const handleOnSubmit = (e: any) => {
// 		e.preventDefault();
// 		setMessages((prev) => [...prev, {data: message, id: 'null'}]);
// 		socket.emit("message", message);
// 		setMessage("");
// 	};

// 	const sendTyping = () => {
// 		socket.emit("typing");
// 	};

// 	return (
// 		<>
// 			<LoginWithGoogle />
// 			{ typing?.typing && <p>Eimer está escribiendo</p>}
// 			<br />
// 			<hr />
// 			{messages.map((msg, i) =>
// 				<p className='border mt-3' style={{borderColor: msg.id === 'null' ? 'blue' : 'red'}} key={i}> - {msg.data}</p>
// 			)}
// 			<form onSubmit={handleOnSubmit}>
// 				<input type="text" value={message} onChange={e => setMessage(e.target.value)} onInput={sendTyping} />
// 				<button>Send</button>
// 			</form>
// 		</>
// 	)
// }

export default App
