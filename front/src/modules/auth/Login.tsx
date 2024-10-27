import { useNavigate } from "react-router-dom";
import { Google } from "./components";


export type LoginProps = {
}
export const Login: React.FC<LoginProps> = () => {

	const navigate = useNavigate();

	const handleRedirectChatGeneral = () => {
		navigate('/general');
	}

	return <>
		<div className="h-full w-[430px] mx-auto shadow-md border border-gray-700 overflow-hidden center flex-col gap-y-4">
			<h1>Login</h1>
			<Google />
			<button onClick={handleRedirectChatGeneral}>Chat General</button>
		</div>
	</>
};
