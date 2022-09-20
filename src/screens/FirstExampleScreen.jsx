import { useState } from "react";
import { Header } from "../components";
import CollectionClass from "../CollectionClass";

/**
 * Read ## First Example in the readme.
 */

export const FirstExampleScreen = () => {
	const instance = new CollectionClass(1, 2, 3);

	const [list, setList] = useState(instance.collection);
	const [input, setInput] = useState(undefined);

	const addToList = (event) => {
		event.preventDefault();
		instance.collection = input;
		setList((previous) => [...previous, instance.collection.at(-1)]);
		event.target.reset();
	};

	return (
		<div className="screen-container">
			<Header heading="First Example" />
			<div className="example-container">
				<form onSubmit={addToList} className="form-container">
					<input
						type="number"
						onChange={(event) =>
							setInput(Number.parseInt(event.target.value))
						}
						className="input"
						placeholder="Insert a numerical value"
					/>
					<button type="submit" className="submission-button">
						Add
					</button>
				</form>
				<section className="map-container">
					{list.map((element, index) => (
						<div key={index} className="mapped-element">
							<p className="text-white">{element}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};
