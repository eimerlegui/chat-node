// export type HomeProps = {

import { useRef, useState } from "react";
import { debounce } from "lodash";
import { HttpClient } from "@/Http";

// }
export const Home: React.FC = () => {
	const [search, setSearch] = useState<string>("");
	// const searching = useRef<boolean>(false);

	const handleSearch = debounce((e) => {
		setSearch(e.target.value);
		getUsersSearch(e.target.value);
	}, 500);

	const getUsersSearch = async (username: string) => {
		const users = await HttpClient.get<any>("users/search", { search: username });
		console.log(users);
	};

	return (
		<>
			<div className="vstack">
				<input type="text" className="rounded-full h-[36px] px-4 mt-4" placeholder="Buscar..." onInput={handleSearch} />
				<p>{search}</p>

				{/* <div className="center absolute rounded-full size-12 bg-purple-950 bottom-4 right-1/2 translate-x-1/2">+</div> */}

				<div className="vstack gap-3 mt-4">
					{Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className="flex gap-4 px-3 py-2 cursor-pointer hover:bg-gray-800">
							{/* <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="" className="size-12" /> */}
							<div className="vstack">
								<p className="font-bold">El cacas 💩</p>
								<p className="text-xs">Last Message send or received</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
