import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Text } from "../components/styledComponents";
import Logo from "../images/Logo";

export default function Onboardingscreen() {
	return (
		<Container>
			<View style={styles.logoView}>
				<Logo />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	logoView: {
		alignItems: "center",
		marginTop: 10,
	},
});
