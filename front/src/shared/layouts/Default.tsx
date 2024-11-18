import { Outlet } from "react-router-dom";

// export type DefaultProps = {}
export const Default: React.FC = () => {
	return (
		<>
			<div className="vstack w-full max-w-[430px] mx-auto h-full">
				<Outlet />
			</div>
		</>
	);
};
