
import { cn } from "@/libs/utils";
import { IMessage, ITyping } from "./types";

export type ChatProps = {
	typing: ITyping | undefined,
	messages: IMessage[],
	message: string,
	handleOnSubmit: (e: any) => void,
	setMessage: React.Dispatch<React.SetStateAction<string>>,
	sendTyping: () => void
};
export const Chat: React.FC<ChatProps> = ({ typing, messages, handleOnSubmit, setMessage, sendTyping, message }) => {

	return (
		<>
			<div className="vstack h-full">
				<div className="flex items-center w-full h-16 shadow-lg px-10 sticky top-0 flex-shrink-0 bg-[#242424]">
					<p className="me-1">Person</p>
					{typing?.typing && <p> está escribiendo</p>}
				</div>

				<div className="vstack flex-col-reverse gap-y-4">
					{messages.map((msg, i) => (
						<div className={cn(msg.id === "null" ? "self-end ms-32 bg-gray-950" : "self-start me-32 bg-[#160d22]", "rounded-xl shadow-lg p-2")}>
							<p className="" key={i}>
								{" "}
								{msg.data}
							</p>
						</div>
					))}
				</div>

				<form className="sticky bottom-0 mt-auto" onSubmit={handleOnSubmit}>
					<div className="flex">
						<input className="rounded-full w-full px-4" type="text" value={message} onChange={(e) => setMessage(e.target.value)} onInput={sendTyping} />
						<button>Send</button>
					</div>
				</form>
			</div>
		</>
	);
};
