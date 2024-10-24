
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ENV } from "../../config/dotenv";

const socket = io(ENV.URL_BACK);

export type ChatProps = {
}
export const Chat: React.FC<ChatProps> = () => {

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

	return (
		<>
			<div className="vstack overflow-auto h-full">
				<div className="flex items-center w-full h-16 shadow-lg px-10 sticky top-0 flex-shrink-0 bg-[#242424]">
					<p className="me-1">Person</p>
					{ typing?.typing && <p> está escribiendo</p>}
				</div>


				<div className="vstack flex-col-reverse">
					{messages.map((msg, i) =>
						<p className='border mt-3' style={{borderColor: msg.id === 'null' ? 'blue' : 'red'}} key={i}> - {msg.data}</p>
					)}
				</div>


				<form className="sticky bottom-0 mt-auto" onSubmit={handleOnSubmit}>
					<div className="flex">
						<input className="rounded-full w-full" type="text" value={message} onChange={e => setMessage(e.target.value)} onInput={sendTyping} />
						<button>Send</button>
					</div>
				</form>
			</div>
		</>
	)
};
