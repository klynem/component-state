import { Section } from "../components";

export const LandingScreen = () => {
	return (
		<div className="h-full w-full flex justify-center bg-background">
			<div className="h-full lg:w-3/5 sm:w-9/12 flex flex-col">
				<div className="h-28 w-full flex justify-center items-center">
					<h1 className="font-mono font-bold text-2xl underline underline-offset-8">
						Component State.
					</h1>
				</div>
				<Section
					title="First Example"
					text="This example uses the useState hook to manage the component's state. The state is instantiated using a class instance and can only be mutated by invoking the accessors defined in the class. The function returned from the useState hook is only used to return a modified array and does not directly mutate the instance members."
					path="/first"
				/>
				<Section
					title="Second Example"
					text="This example, although similar to the first, uses the useReducer hook to manage the component's state. The flexibility of both the dispatch and reducer functions allows for greater control, especially when complex data structures are involved. The reducer function only returns the modified array and does not mutate the state variable directly."
					path="/second"
				/>
			</div>
		</div>
	);
};
