

// import HomeRoutes from "@/modules/home/routes";
// import { Main } from "@/modules/main/pages";
import { createBrowserRouter } from "react-router-dom";
import LoginWithGoogle from "../../test/auth/Login";
import { Login } from "../../modules/auth/Login";
import { Default } from "../layouts/Default";
import { Chat } from "../../modules/chat/Chat";

export default createBrowserRouter([
	// {
	// 	path: "/login",
	// 	element: <Login />
	// },
	// {
	// 	path: "/eimer",
	// 	element: <LoginWithGoogle />,
	// },
	{
		path: "/",
		element: <Default />,
		children: [
			{
				path: "/",
				element: <Chat />
			},
			{
				path: "/chat",
				element: <Chat />
			}

		]
	}
])