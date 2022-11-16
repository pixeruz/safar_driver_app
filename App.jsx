import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PreventSplashScreen from "./components/PreventSplashScreen";
import { OptionsProvider } from "./contexts/OptionsContext";
import MainStackNavigator from "./navigations/MainStackNavigator";
import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { Text } from "./components/styledComponents";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
	const netInfo = useNetInfo();

	React.useEffect(() => {
		async function prepare() {
			try {
				await SplashScreen.preventAutoHideAsync();
			} catch (e) {
				console.warn(e);
			}
		}

		prepare();
	}, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<OptionsProvider>
					<PreventSplashScreen>
						<SafeAreaView style={{ flex: 1 }}>
							<StatusBar style='auto' />
							{!netInfo.isConnected && (
								<View
									style={{
										padding: 10,
										backgroundColor: "red",
									}}
								>
									<Text
										bold
										style={{
											textAlign: "center",
											color: "white",
										}}
									>
										Internet o'chiq
									</Text>
								</View>
							)}
							<MainStackNavigator />
						</SafeAreaView>
					</PreventSplashScreen>
				</OptionsProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
