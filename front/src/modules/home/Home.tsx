// export type HomeProps = {
// }
export const Home: React.FC = () => {
	return (
		<>
			<div className="vstack">
				{Array.from({ length: 30 }).map((_, i) => (
					<p key={i}>hola</p>
				))}
			</div>
		</>
	);
};
