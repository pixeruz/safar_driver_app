import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";
import Logo from "../images/Logo";

export default function LoginScreen() {
	return (
		<Container>
			<View style={styles.logoView}>
				<Logo />
			</View>
			<Text bold style={styles.title}>
				Kirish
			</Text>
			<Text medium style={styles.subtitle}>
				Davom ettirish uchun raqamingizni kiriting
			</Text>
			<View style={styles.phoneInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Telefon raqamingiz:
				</Text>
				<Input value="+998" placeholder="Telefon raqam" />
			</View>
			<Button style={styles.signUpButton}>
				<Text bold light>
					Davom ettirish
				</Text>
			</Button>
			<Button style={styles.loginButton}>
				<Text semiBold>Akkountingiz yo'qmi?</Text>
			</Button>
		</Container>
	);
}

const styles = StyleSheet.create({
	logoView: {
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
	phoneInputView: {
		marginVertical: 20,
	},
	phoneInputViewLabel: {
		fontSize: 14,
		color: "#222222",
	},
});
