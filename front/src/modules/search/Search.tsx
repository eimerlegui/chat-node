// export type HomeProps = {

import { useState } from "react";
import { debounce } from "lodash";
import { HttpClient } from "@/Http";

// }
export const Search: React.FC = () => {
	const [search, setSearch] = useState<string>("");
	const [users, setUsers] = useState<any[]>([]);
	// const searching = useRef<boolean>(false);

	const handleSearch = debounce((e) => {
		setSearch(e.target.value);
		getUsersSearch(e.target.value);
	}, 500);

	const getUsersSearch = async (username: string) => {
		try {
			const users = await HttpClient.get<any>("users/search", { search: username });
			setUsers(users.data ?? []);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="vstack">
				<input type="text" className="rounded-full h-[36px] px-4 mt-4" placeholder="Buscar..." onInput={handleSearch} />

				{/* <div className="center absolute rounded-full size-12 bg-purple-950 bottom-4 right-1/2 translate-x-1/2">+</div> */}

				<div className="vstack gap-3 mt-4">
					{users.map((user, index) => (
						<div key={index} className="flex justify-between gap-4 px-3 py-2 cursor-pointer hover:bg-gray-800">
							{/* <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="" className="size-12" /> */}
							<p className="font-bold">{user.username}</p>
							<div className="center size-10 rounded-full bg-slate-800">+</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
