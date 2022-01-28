import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../components/styledComponents";

export default function Onboardingscreen() {
	return (
		<View style={styles.container}>
			<Text>test</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
