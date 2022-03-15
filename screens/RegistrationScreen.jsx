import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
	Button,
	Container,
	defaultStyles,
	Input,
	Text,
} from "../components/styledComponents";
import { TextInputMask } from "react-native-masked-text";
import AuthService from "../api/AuthAPI";

export default function RegistrationScreen({ navigation }) {
	const [phone, setPhone] = React.useState("998");
	const [name, setName] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const phoneRef = React.useRef();

	React.useEffect(() => {
		phoneRef.current.autoFocus = true;

		return () => {};
	});

	const signup = async () => {
		try {
			setLoading(true);

			if (typeof String.prototype.replaceAll === "undefined") {
				String.prototype.replaceAll = function (match, replace) {
					return this.replace(new RegExp(match, "g"), () => replace);
				};
			}

			let correctPhone = phone.replaceAll(/\D/g, "");

			if (
				correctPhone.length !== 12 &&
				name.length > 3 &&
				name.length < 20
			) {
				return;
			}

			let dataSnapshot = await AuthService.createUserPhone(
				correctPhone,
				name
			);

			console.log(dataSnapshot);

			if (dataSnapshot?.ok) {
				navigation.navigate("OTPScreen", {
					id: dataSnapshot.data.id,
				});
			} else {
				let msg = dataSnapshot.message.startsWith("Invalid")
					? "Raqam xato kiritilgan"
					: "Siz ro'yxatdan o'tgansiz, login qiling";
				Alert.alert("Xatolik", msg);
			}
		} catch (error) {
			console.warn(error);
		} finally {
			setLoading(false);
		}
	};

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
				<TextInputMask
					type={"custom"}
					ref={phoneRef}
					autoFocus
					keyboardType="phone-pad"
					options={{
						mask: "+998 (99) 999-99-99",
					}}
					placeholder="Telefon raqam"
					value={phone}
					onChangeText={setPhone}
					style={defaultStyles.defaultInputStyles}
				/>
			</View>
			<View style={styles.nameInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Ismingiz:
				</Text>
				<Input
					placeholder="Ismingiz"
					value={name}
					onChangeText={setName}
					style={defaultStyles.defaultInputStyles}
				/>
			</View>
			<Button
				onPress={() => {
					signup();
				}}
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
		marginTop: 20,
		marginBottom: 5,
	},
	nameInputView: {
		marginTop: 5,
		marginBottom: 20,
	},
	phoneInputViewLabel: {
		fontSize: 14,
		color: "#222222",
	},
});
