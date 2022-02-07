import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
	Button,
	Container,
	defaultStyles,
	Input,
	Text,
} from "../components/styledComponents";
import Logo from "../images/Logo";
import { useQuery } from "react-query";
import { TextInputMask } from "react-native-masked-text";
import AuthService from "../api/AuthAPI";

export default function LoginScreen({ navigation }) {
	const [phone, setPhone] = React.useState("998");
	const [loading, setLoading] = React.useState(false);
	const phoneRef = React.useRef();

	const login = async () => {
		try {
			setLoading(true);

			if (typeof String.prototype.replaceAll === "undefined") {
				String.prototype.replaceAll = function (match, replace) {
					return this.replace(new RegExp(match, "g"), () => replace);
				};
			}

			let correctPhone = phone.replaceAll(/\D/g, "");

			if (correctPhone.length !== 12) {
				return;
			}

			let dataSnapshot = await AuthService.loginService(correctPhone);

			console.log(dataSnapshot);

			if (dataSnapshot?.ok) {
				navigation.navigate("OTPScreen", {
					id: dataSnapshot.data.id,
				});
			} else {
				let msg = dataSnapshot.message.startsWith("Invalid")
					? "Raqam xato kiritilgan"
					: "Siz ro'yxatdan o'tmagansiz, ro'yxatdan o'ting";
				Alert.alert("Xatolik", msg);
			}
		} catch (error) {
			console.warn(error);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		phoneRef.current.autoFocus = true;
	});

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
			<Button
				disabled={loading}
				onPress={() => login()}
				style={styles.signUpButton}
			>
				<Text bold light>
					Davom ettirish
				</Text>
			</Button>
			<Button
				disabled={loading}
				onPress={() => navigation.navigate("RegistrationScreen")}
				style={styles.loginButton}
			>
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
