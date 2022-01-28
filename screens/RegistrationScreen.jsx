import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";

export default function RegistrationScreen({ navigation }) {
	return (
		<Container>
			<Text medium style={styles.subtitle}>
				1/4
			</Text>
			<Text medium style={styles.title}>
				Davom ettirish uchun raqamingiz va FISHni kiriting
			</Text>
			<View style={styles.phoneInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Telefon raqamingiz:
				</Text>
				<Input value="+998" placeholder="Telefon raqam" />
			</View>
			<Button
				onPress={() => navigation.navigate("RegistrationOTPScreen")}
				style={styles.signUpButton}
			>
				<Text bold light>
					Davom ettirish
				</Text>
			</Button>
			<Button
				onPress={() => navigation.navigate("LoginScreen")}
				style={styles.loginButton}
			>
				<Text semiBold>Akkountingiz bormi?</Text>
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
		fontSize: 16,
		marginTop: 5,
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 22,
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
