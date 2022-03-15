import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import PreventSplashScreen from "./components/PreventSplashScreen";
import { OptionsProvider } from "./contexts/OptionsContext";
import MainStackNavigator from "./navigations/MainStackNavigator";

export default function App() {
	return (
		<NavigationContainer>
			<OptionsProvider>
				<PreventSplashScreen>
					<SafeAreaView style={{ flex: 1 }}>
						<StatusBar style="auto" />
						<MainStackNavigator />
					</SafeAreaView>
				</PreventSplashScreen>
			</OptionsProvider>
		</NavigationContainer>
	);
}
