import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PreventSplashScreen from "./components/PreventSplashScreen";
import { Text } from "./components/styledComponents";

export default function App() {
	return (
		<PreventSplashScreen>
			<View style={styles.container}>
				<Text>Test</Text>
				<StatusBar style="auto" />
			</View>
		</PreventSplashScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
