import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Back from "../images/Back";
import { Button, Text } from "./styledComponents";
import { Shadow } from "react-native-shadow-2";

export default function MainStackNavigatorHeader({
	navigation,
	route,
	options,
}) {
	return (
		<View style={styles.container}>
			<Shadow
				viewStyle={{
					width: "100%",
					backgroundColor: "#ffffff",
					marginBottom: 1,
				}}
			>
				<View style={styles.header}>
					<Button
						onPress={() => {
							try {
								navigation?.goBack();
							} catch (e) {
								navigation?.replace("LoginScreen");
							}
						}}
						style={styles.backButton}
					>
						<Back />
					</Button>
					<Text style={styles.title} medium>
						{options?.title || route.name}
					</Text>
				</View>
			</Shadow>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
	},
	container: {
		backgroundColor: "#ffffff",
	},
	title: {
		fontSize: 20,
	},
	backButton: {
		paddingRight: 25,
	},
});
