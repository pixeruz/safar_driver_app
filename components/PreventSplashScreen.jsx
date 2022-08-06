import React from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import {
	getValueForFromSecureStore,
	removeValueFromSecureStore,
} from "../services/secureStore";
import { useOptions } from "../contexts/OptionsContext";
import { getDataFromAsyncStorage } from "../services/asyncStorage";
import { Platform } from "react-native";

export default function PreventSplashScreen({ children }) {
	const [isLoaded, setLoaded] = React.useState(false);
	const [options, setOptions] = useOptions();

	async function _cachedResources() {
		await Font.loadAsync({
			"Inter-Regular": require("../fonts/Inter-Regular.ttf"),
			"Inter-Black": require("../fonts/Inter-Black.ttf"),
			"Inter-Bold": require("../fonts/Inter-Bold.ttf"),
			"Inter-SemiBold": require("../fonts/Inter-SemiBold.ttf"),
			"Inter-ExtraBold": require("../fonts/Inter-ExtraBold.ttf"),
			"Inter-ExtraLight": require("../fonts/Inter-ExtraLight.ttf"),
			"Inter-Light": require("../fonts/Inter-Light.ttf"),
			"Inter-Medium": require("../fonts/Inter-Medium.ttf"),
			"Inter-Thin": require("../fonts/Inter-Thin.ttf"),
		});

		let token;

		if (Platform.OS == "web") {
			token = await getDataFromAsyncStorage("token");
		} else {
			token = await getValueForFromSecureStore("token");
		}

		const driver = await getDataFromAsyncStorage("driver");

		setOptions({
			...options,
			token: token,
			driver: driver,
		});
	}

	if (isLoaded) {
		return children;
	} else {
		return (
			<AppLoading
				startAsync={_cachedResources}
				onFinish={() => setLoaded(true)}
				onError={() => console.warn}
			/>
		);
	}
}
