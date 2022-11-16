import React from "react";
import { View, StyleSheet } from "react-native";
import MainHeaderUserProfile from "../components/MainHeaderUserProfile";
import Pale from "../components/Pale";
import { Button, Container, Text } from "../components/styledComponents";
import TripsSectionedList from "../components/TripsSectionedList";
import PlusIcon from "../images/Plus";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import UsersService from "../api/UsersAPI";
import { useOptions } from "../contexts/OptionsContext";

export default function HomeScreen({ navigation }) {
	const notificationListener = React.useRef();
	const responseListener = React.useRef();
	const [expoPushToken, setExpoPushToken] = React.useState("");
	const [notification, setNotification] = React.useState(false);
	const [options] = useOptions();

	React.useEffect(() => {
		registerForPushNotificationsAsync(options?.token).then((token) =>
			setExpoPushToken(token)
		);

		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});

		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current =
			Notifications.addNotificationResponseReceivedListener(
				(response) => {
					console.log(response);
				}
			);

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(
				responseListener.current
			);
		};
	}, []);

	return (
		<Container style={styles.container}>
			<MainHeaderUserProfile />
			<Pale />
			<View style={styles.titleWrapper}>
				<Text style={styles.title} bold>
					Mening safarlarim
				</Text>
			</View>
			<Button
				onPress={() =>
					navigation.navigate("AddTripScreen", {
						screen: "AddTripProperties",
						initial: false,
					})
				}
				style={styles.floatingButton}
			>
				<PlusIcon />
				<Text medium style={styles.create}>
					Yaratish
				</Text>
			</Button>
			<TripsSectionedList navigation={navigation} />
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 0,
	},
	title: {
		fontSize: 16,
	},
	titleWrapper: {
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	floatingButton: {
		backgroundColor: "#771E99",
		position: "absolute",
		paddingVertical: 12,
		paddingHorizontal: 18,
		flexDirection: "row",
		bottom: 15,
		right: 20,
		borderRadius: 30,
		zIndex: 3,
	},
	create: {
		color: "#ffffff",
		marginLeft: 10,
		fontSize: 18,
		textTransform: "uppercase",
		letterSpacing: 1.5,
		lineHeight: 24,
	},
});

async function registerForPushNotificationsAsync(tokenAuth) {
	let token;
	if (Device.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== "granted") {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== "granted") {
			alert("Failed to get push token for push notification!");
			return;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
		if (token) {
			UsersService.setToken(tokenAuth, token);
		}
	} else {
		alert("Must use physical device for Push Notifications");
	}

	if (Platform.OS === "android") {
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});
	}

	return token;
}
