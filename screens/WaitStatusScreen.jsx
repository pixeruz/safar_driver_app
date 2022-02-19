import React from "react";
import { View, StyleSheet } from "react-native";
import UsersService from "../api/UsersAPI";
import { Button, Container, Input, Text } from "../components/styledComponents";
import { useOptions } from "../contexts/OptionsContext";
import Logo from "../images/Logo";
import { storeDataToAsyncStorage } from "../services/asyncStorage";

export default function WaitStatusScreen({ navigation }) {
	const [options] = useOptions();
	const [loading, setLoading] = React.useState();
	const check = async () => {
		setLoading(true);
		try {
			let user = await UsersService.getProfile(options?.token);
			if (user?.data?.driver?.is_confirmed) {
				await storeDataToAsyncStorage("driver", "confirmed");
				navigation.replace("TabBarNavigator");
			} else {
				await storeDataToAsyncStorage("driver", "not");
			}
		} catch (e) {
			console.log("Error", e + "");
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		check();

		return () => {};
	}, []);

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
				disabled={loading}
				onPress={() => {
					check();
				}}
				style={styles.signUpButton}
			>
				<Text bold light>
					{loading ? "Tekshirilmoqda" : "Yangilash"}
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
