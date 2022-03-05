import React from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	Pressable,
	Platform,
	Image,
	FlatList,
	Linking,
} from "react-native";
import Avatar from "../images/nophoto.png";
import SettingsIcon from "../images/settings.png";
import { Button, Container, Text } from "../components/styledComponents";
import Pale from "../components/Pale";
import UsersService from "../api/UsersAPI";
import { useOptions } from "../contexts/OptionsContext";

export default function ProfileScreen({ navigation }) {
	const [data, setData] = React.useState({});
	const [options, setOptions] = useOptions();

	async function loadData() {
		try {
			let user = await UsersService.getProfile(options?.token);
			setData(user.data);
		} catch (error) {}
	}

	React.useEffect(() => {
		loadData();
		let interval = setInterval(() => {
			loadData();
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Container style={styles.container}>
			<Pale />
			<View style={styles.titleWrapper}>
				<Text style={styles.title} bold>
					Profil
				</Text>
			</View>
			<Pale />

			<ProfileHeader data={data} navigation={navigation} />
			<Pale />

			<View style={styles.titleWrapper}>
				<Text medium>Hisobingiz:</Text>
				<Text
					bold
					style={{
						fontSize: 26,
					}}
				>
					{data?.user?.user_balance
						? data?.user?.user_balance + " so’m"
						: "Yuklanmoqda"}
				</Text>
				<Button
					onPress={async () => {
						let permission = await Linking.canOpenURL(
							"https://my.click.uz/services/pay/?service_id=19624"
						);
						if (permission) {
							Linking.openURL(
								"https://my.click.uz/services/pay/?service_id=19624"
							);
						}
					}}
					style={styles.addCashButton}
				>
					<Text
						bold
						style={{
							color: "white",
						}}
					>
						Hisobni to'ldirish
					</Text>
				</Button>
				<Button style={styles.helpButton}>
					<Text
						style={{
							color: "#771E99",
						}}
						bold
					>
						Yordam
					</Text>
				</Button>
			</View>
		</Container>
	);
}

function ProfileHeader({ navigation, data }) {
	return (
		<View style={styles.profileView}>
			<Image source={Avatar} style={styles.avatar} />
			<View style={styles.texts}>
				<Text semiBold style={styles.name}>
					{data?.user?.user_name || "Yuklanmoqda"}
				</Text>
				<Text medium style={styles.phone}>
					+{data?.user?.user_phone || "Yuklanmoqda"}
				</Text>
			</View>
			<Pressable style={styles.editButton}>
				<Image source={SettingsIcon} />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 0,
		margin: 0,
	},
	profileView: {
		flexDirection: "row",
		backgroundColor: "#ffffff",
		alignItems: "center",
		padding: 16,
	},
	title: {
		fontSize: 20,
	},
	addCashButton: {
		backgroundColor: "#771E99",
		marginTop: 30,
	},
	helpButton: {
		borderWidth: 2,
		borderColor: "#771E99",
	},
	titleWrapper: {
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	avatar: {
		width: 70,
		height: 70,

		borderRadius: 50,
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
	},
	phone: {
		fontSize: 14,
		fontWeight: "500",
		marginTop: 5,
	},
	texts: {
		justifyContent: "center",
		paddingLeft: 10,
	},
	editButton: {
		marginLeft: "auto",
		justifyContent: "center",
		padding: 10,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#9BA1A788",
		marginRight: 7,
	},
	options: {
		marginTop: "auto",
		borderBottomWidth: 1,
		marginBottom: "auto",
	},
	oneOption: {
		borderTopWidth: 1,
		paddingVertical: Platform.OS == "ios" ? 15 : 0,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	optionsTitle: {
		fontSize: 18,
	},
	exit: {
		fontSize: 18,
		textAlign: "right",
		color: "#00000055",
	},
	exitButton: {
		padding: 10,
		justifyContent: "flex-end",
	},
	orderHistory: {
		backgroundColor: "#ffffff",
		marginTop: 5,
		flexGrow: 1,
	},
	orderHistoryText: {
		fontSize: 20,
		fontWeight: "700",
		padding: 16,
	},
	ordersList: {
		flexGrow: 1,
		backgroundColor: "#ffffff",
	},
	item: {
		padding: 16,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	item_infos: {
		width: "55%",
		borderBottomColor: "#DFE4E9",
		borderBottomWidth: 1,
		paddingBottom: 10,
		alignItems: "flex-start",
	},
	car_name: {
		fontSize: 16,
		fontWeight: "600",
	},
	driver_name: {
		fontSize: 12,
		fontWeight: "600",
		color: "#771E99",
	},
	price_wrapper: {
		flexDirection: "row",
		marginTop: 15,
		alignItems: "flex-end",
	},
	price: {
		fontSize: 20,
		fontWeight: "700",
		color: "#333333",
	},
	infos: {
		marginTop: 10,
	},
	image: {
		width: 24,
		height: 24,
	},
	footer: {
		padding: 20,
		paddingHorizontal: 40,
	},
	footerText: {
		color: "#73787D",
		textAlign: "center",
	},
	trip_status: {
		backgroundColor: "#27AE6044",
		borderRadius: 5,
		color: "#27AE60",
		padding: 2,
		fontSize: 12,
		marginBottom: 5,
	},
});
