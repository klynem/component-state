import { useReducer, useState } from "react";
import { Header } from "../components";
import CollectionClass from "../CollectionClass";

/**
 * Read ## Second Example in the readme.
 */

function reducer(state, action) {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		default:
			break;
	}
}

export const SecondExampleScreen = () => {
	const instance = new CollectionClass(1, 2, 3);

	const [state, dispatch] = useReducer(reducer, instance.collection);
	const [input, setInput] = useState(null);

	const addToState = (event) => {
		event.preventDefault();
		instance.collection = input;
		dispatch({ type: "add", payload: instance.collection.at(-1) });
		event.target.reset();
	};
	return (
		<div className="screen-container">
			<Header heading="Second Example" />
			<div className="example-container">
				<form onSubmit={addToState} className="form-container">
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
					{state.map((element, index) => (
						<div key={index} className="mapped-element">
							<p className="text-white">{element}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};
