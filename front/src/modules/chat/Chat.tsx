import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ENV } from "../../config/dotenv";
import { Chat, IMessage, ITyping } from "@/components/chat";

const socket = io(ENV.URL_BACK);

export type ChatProps = {};
export const ChatGlobal: React.FC<ChatProps> = () => {
	const [typing, setTyping] = useState<ITyping>();
	const [message, setMessage] = useState<string>("");
	const [messages, setMessages] = useState<IMessage[]>([]);

	let timer: any = null;

	useEffect(() => {
		socket.on("message", (data) => {
			receiveMessage(data);
		});
		socket.on("typing", (data) => {
			setTyping({ id: data.id, typing: true });
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				setTyping({ id: "", typing: false });
			}, 1000);
		});
	}, []);

	useEffect(() => {}, [typing]);

	const receiveMessage = (data: any) => {
		setMessages((prev) => [...prev, data]);
	};

	const handleOnSubmit = (e: any) => {
		e.preventDefault();
		setMessages((prev) => [...prev, { data: message, id: "null" }]);
		socket.emit("message", message);
		setMessage("");
	};

	const sendTyping = () => {
		socket.emit("typing");
	};

	return (
		<Chat typing={typing} messages={messages} message={message} handleOnSubmit={handleOnSubmit} setMessage={setMessage} sendTyping={sendTyping} />
	);
};
