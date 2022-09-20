import { Link } from "react-router-dom";

export const Section = ({ title, text, path }) => {
	return (
		<div className="mb-10 space-y-6">
			<h1 className="font-mono font-bold text-xl">{title}</h1>
			<p className="font-sans font-light text-lg leading-relaxed">
				{text}
			</p>
			<button className="h-16 w-40 flex flex-row flex-nowrap justify-center items-center rounded-lg bg-black hover:bg-gradient-to-r from-green-400 to-blue-500">
				<Link to={path} className="font-mono font-bold text-white">
					{title}
				</Link>
			</button>
		</div>
	);
};
