import React from "react";
import { View, StyleSheet } from "react-native";
import MainHeaderUserProfile from "../components/MainHeaderUserProfile";
import Pale from "../components/Pale";
import { Container, Text } from "../components/styledComponents";

export default function HomeScreen({ navigation }) {
	return (
		<Container style={styles.container}>
			<MainHeaderUserProfile />
			<Pale />
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 0,
	},
});
