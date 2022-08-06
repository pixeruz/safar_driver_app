import React from "react";
import { View, StyleSheet, Alert, Platform } from "react-native";
import AuthService from "../api/AuthAPI";
import { Button, Container, Input, Text } from "../components/styledComponents";
import { useOptions } from "../contexts/OptionsContext";
import Logo from "../images/Logo";
import { storeDataToAsyncStorage } from "../services/asyncStorage";
import { saveToSecureStorage } from "../services/secureStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OTPScreen({ route, navigation }) {
	const { id } = route.params;
	const codeRef = React.useRef(null);
	const [codeValue, setCodeValue] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [options, setOptions] = useOptions();

	React.useEffect(() => {
		if (!id) {
			navigation.goBack();
		}

		setTimeout(() => codeRef?.current?.focus(), 1000);

		return null;
	}, []);

	React.useEffect(() => {
		if (codeValue?.length == 5) {
			checkCode();
		}
	}, [codeValue]);

	async function checkCode() {
		try {
			setLoading(true);

			if (codeValue?.length !== 5) {
				return;
			}

			let snapshotData = await AuthService.checkCode(codeValue, id);

			if (!snapshotData?.ok) {
				return;
			} else {
				if (
					snapshotData?.data?.user?.driver &&
					!snapshotData?.data?.user?.driver?.is_confirmed
				) {
					navigation.replace("WaitStatusScreen");
					return;
				}
				if (Platform.OS === "web") {
					await AsyncStorage.setItem(
						"token",
						snapshotData.data.token
					);
				} else {
					await saveToSecureStorage("token", snapshotData.data.token);
				}
				setOptions({
					token: snapshotData.data.token,
				});
				if (!snapshotData?.data?.user?.driver) {
					if (Platform.OS === "web") {
						await AsyncStorage.setItem("driver", "not");
					} else {
						await saveToSecureStorage("driver", "not");
					}
					navigation.replace("RegistrationScreen", {
						screen: "SubmitIdScreen",
					});
				} else {
					if (Platform.OS === "web") {
						await AsyncStorage.setItem("driver", "confirmed");
					} else {
						await saveToSecureStorage("driver", "confirmed");
					}
					navigation.reset({
						index: 0,
						routes: [{ name: "TabBarNavigator" }],
					});
				}
			}
		} catch (error) {
			alert(JSON.stringify(error));
		} finally {
			setLoading(false);
		}
	}

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
				<Input
					editable={!loading}
					keyboardType={"phone-pad"}
					value={codeValue}
					onChangeText={setCodeValue}
					placeholder="Telefon raqam"
					autoFocus
				/>
			</View>
			<Button disabled={loading} style={styles.submitButton}>
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
