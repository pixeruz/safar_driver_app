import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
} from "react-native";
import React from "react";
import UsersService from "../api/UsersAPI";
import { useOptions } from "../contexts/OptionsContext";
import moment from "moment/moment";
import "moment/locale/uz-latn";

const Item = ({ message, createdAt }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{message}</Text>
		<Text style={styles.date}>{moment(createdAt).toNow()}</Text>
	</View>
);

export default function UserNotifications() {
	const renderItem = ({ item }) => {
		return (
			<Item
				message={item.notification_message}
				createdAt={item.createdAt}
			/>
		);
	};

	const [notifications, setNotifications] = React.useState([]);
	const [options] = useOptions();

	React.useEffect(() => {
		UsersService.getNotifications(options?.token).then((data) => {
			if (data?.notifications) {
				setNotifications(data?.notifications);
			}
		});

		let interval = setInterval(() => {
			UsersService.getNotifications(options?.token).then((data) => {
				if (data?.notifications) {
					setNotifications(data?.notifications);
				}
			});
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				refreshing
				data={notifications}
				renderItem={renderItem}
				keyExtractor={(item) => item.notification_id}
				contentContainerStyle={styles.flatList}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flatList: {
		paddingBottom: 300,
	},
	item: {
		padding: 16,
		marginVertical: 6,
		marginHorizontal: 8,
		borderLeftColor: "#771E99",
		borderRightColor: "#22222221",
		borderTopColor: "#22222221",
		borderBottomColor: "#22222221",
		borderLeftWidth: 3,
		borderWidth: 1,
	},
	title: {
		fontSize: 16,
		fontWeight: "500",
	},
	date: {
		fontSize: 12,
		marginTop: 4,
	},
});
