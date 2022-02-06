import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import PreventSplashScreen from "./components/PreventSplashScreen";
import MainStackNavigator from "./navigations/MainStackNavigator";

export default function App() {
	const queryClient = new QueryClient();

	return (
		<PreventSplashScreen>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					<SafeAreaView style={{ flex: 1 }}>
						<StatusBar style="auto" />
						<MainStackNavigator />
					</SafeAreaView>
				</NavigationContainer>
			</QueryClientProvider>
		</PreventSplashScreen>
	);
}
