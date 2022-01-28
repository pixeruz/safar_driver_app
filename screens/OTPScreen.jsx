import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";
import Logo from "../images/Logo";

export default function OTPScreen({ navigation }) {
	return (
		<Container>
			<View style={styles.logoView}>
				<Logo />
			</View>
			<Text bold style={styles.title}>
				SMS-tasdiqlash
			</Text>
			<Text medium style={styles.subtitle}>
				<Text style={styles.phoneNumber}>+998 ** *** 42 34</Text>{" "}
				raqamiga SMS-kod yuborildi. Ro’yxatdan o’tishni tugatish uchun
				SMM-kodni yuvoring
			</Text>
			<View style={styles.OTPInputView}>
				<Text medium style={styles.OTPInputViewLabel}>
					SMS-kod:
				</Text>
				<Input value="000000" placeholder="Telefon raqam" />
			</View>
			<Button style={styles.submitButton}>
				<Text bold light>
					Davom ettirish
				</Text>
			</Button>
			<Button
				onPress={() => navigation.goBack()}
				style={styles.resendButton}
			>
				<Text semiBold>Notog’ri raqam terdingizmi?</Text>
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
	submitButton: {
		backgroundColor: "#771E99",
	},
	resendButton: {
		backgroundColor: "#DFE4E9",
	},
	OTPInputView: {
		marginVertical: 20,
	},
	OTPInputViewLabel: {
		fontSize: 14,
		color: "#222222",
	},
	phoneNumber: {
		color: "#000",
	},
});
