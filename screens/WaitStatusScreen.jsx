import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";
import Logo from "../images/Logo";

export default function WaitStatusScreen({ navigation }) {
	return (
		<Container>
			<View style={styles.logoView}>
				<Logo />
			</View>
			<Text bold style={styles.title}>
				Sizning arizangiz yuborildi
			</Text>
			<Text medium style={styles.subtitle}>
				Ariza yuborganingiz uchun rahmat! {"\n"} Tez orada menejeremiz
				siz bilan bo’glanadi!
			</Text>

			<Button
				onPress={() => navigation.replace("TabBarNavigator")}
				style={styles.signUpButton}
			>
				<Text bold light>
					Yangilash
				</Text>
			</Button>
		</Container>
	);
}

const styles = StyleSheet.create({
	logoView: {
		marginTop: 10,
		marginBottom: 30,
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		textAlign: "center",
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 22,
		marginTop: 5,
		color: "#771E99",
		textAlign: "center",
	},
	signUpButton: {
		marginTop: "auto",
		backgroundColor: "#771E99",
	},
});
