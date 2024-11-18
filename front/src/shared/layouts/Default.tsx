import { Outlet } from "react-router-dom";

// export type DefaultProps = {}
export const Default: React.FC = () => {
	return (
		<>
			<div className="vstack w-full max-w-[430px] mx-auto shadow-md border border-gray-700  h-fit">
				<Outlet />
			</div>
		</>
	);
};
