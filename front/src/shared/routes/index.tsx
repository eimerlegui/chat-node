// import HomeRoutes from "@/modules/home/routes";
// import { Main } from "@/modules/main/pages";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../modules/auth/Login";
import { Default } from "../layouts/Default";
import { Chat } from "../../modules/chat/Chat";
import { Home } from "@/modules/home/Home";
import { Search } from "@/modules/search/Search";

export const routers = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <Default />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/search",
				element: <Search />,
			},
			{
				path: "/general",
				element: <Chat />,
			},
		],
	},
]);
