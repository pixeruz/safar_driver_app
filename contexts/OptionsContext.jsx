import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform } from "react-native";
import { removeAllDataFromAsyncStorage } from "../services/asyncStorage";
import { removeValueFromSecureStore } from "../services/secureStore";

export const OptionsContexts = React.createContext();

export function OptionsProvider({ children }) {
	const [options, setOptions] = React.useState();
	const navigation = useNavigation();

	React.useEffect(() => {
		if (options?.logout) {
			setOptions({});

			removeAllDataFromAsyncStorage();
			if (Platform.OS !== "web") {
				removeValueFromSecureStore("token");
			}

			navigation.reset({
				index: 0,
				routes: [
					{
						name: "LoginScreen",
					},
				],
			});
		}
		return () => {};
	}, [options]);

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
