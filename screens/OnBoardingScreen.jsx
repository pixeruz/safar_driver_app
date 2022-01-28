import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Container, Text } from "../components/styledComponents";
import Logo from "../images/Logo";

export default function Onboardingscreen({ navigation }) {
	return (
		<Container>
			<View style={styles.logoView}>
				<Logo />
			</View>
			<Text bold style={styles.title}>
				Ketdikmi?
			</Text>
			<Text medium style={styles.subtitle}>
				Safar Driver ilovasini yuklaganingiz uchun rahmat! Ishga tushish
				uchun ro’yxatdan o’tishingiz kerak!
			</Text>
			<View style={styles.space}></View>
			<Button
				onPress={() => navigation.navigate("RegistrationScreen")}
				style={styles.signUpButton}
			>
				<Text bold light>
					Ro’yxatdan o’tish
				</Text>
			</Button>
			<Button
				onPress={() => navigation.navigate("LoginScreen")}
				style={styles.loginButton}
			>
				<Text semiBold>Kirish</Text>
			</Button>
		</Container>
	);
}

const styles = StyleSheet.create({
	logoView: {
		alignItems: "center",
		marginTop: 10,
		marginBottom: 30,
	},
	title: {
		fontSize: 20,
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 22,
		marginTop: 5,
		color: "#73787D",
	},
	space: {
		backgroundColor: "#F7F8F9",
		flexGrow: 1,
		marginVertical: 15,
		borderRadius: 9,
	},
	signUpButton: {
		backgroundColor: "#771E99",
	},
	loginButton: {
		backgroundColor: "#DFE4E9",
	},
});
