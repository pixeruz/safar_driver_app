import React from "react";

export const OptionsContexts = React.createContext();

export function OptionsProvider({ children }) {
	const [options, setOptions] = React.useState();

	return (
		<OptionsContexts.Provider value={{ options, setOptions }}>
			<OptionsContexts.Consumer>
				{() => children}
			</OptionsContexts.Consumer>
		</OptionsContexts.Provider>
	);
}

export function useOptions() {
	const { options, setOptions } = React.useContext(OptionsContexts);

	return [options, setOptions];
}
