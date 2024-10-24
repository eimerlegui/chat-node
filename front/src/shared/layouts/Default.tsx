import { Outlet } from "react-router-dom";


export type DefaultProps = {
}
export const Default: React.FC<DefaultProps> = () => {
	return <>
		<div className="vstack h-full w-[430px] mx-auto shadow-md border border-gray-700 overflow-hidden">
			<Outlet />
		</div>
	</>;
};
