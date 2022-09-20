import { Link } from "react-router-dom";

export const Header = ({ heading }) => {
	return (
		<div className="h-28 w-full flex flex-row items-center justify-around">
			<h1 className="font-mono font-thin text-xl">{heading}</h1>
			<Link to="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6"
				>
					<path
						fillRule="evenodd"
						d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</Link>
		</div>
	);
};
