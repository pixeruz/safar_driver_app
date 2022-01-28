import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import PreventSplashScreen from "./components/PreventSplashScreen";
import MainStackNavigator from "./navigations/MainStackNavigator";

export default function App() {
	return (
		<PreventSplashScreen>
			<NavigationContainer>
				<SafeAreaView style={{ flex: 1 }}>
					<StatusBar style="auto" />
					<MainStackNavigator />
				</SafeAreaView>
			</NavigationContainer>
		</PreventSplashScreen>
	);
}
