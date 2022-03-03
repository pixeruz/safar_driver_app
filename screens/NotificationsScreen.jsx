import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import MainHeaderUserProfile from "../components/MainHeaderUserProfile";
import NotificationsList from "../components/NotificationsList";
import Pale from "../components/Pale";
import { Button, Container, Text } from "../components/styledComponents";
import TripsSectionedList from "../components/TripsSectionedList";
import PlusIcon from "../images/Plus";

export default function NotificationsScreen({ navigation }) {
	return (
		<Container style={styles.container}>
			<Pale />
			<View style={styles.titleWrapper}>
				<Text style={styles.title} bold>
					E’lonlar
				</Text>
			</View>
			<Pale />

			<NotificationsList navigation={navigation} />
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 0,
	},
	title: {
		fontSize: 20,
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
