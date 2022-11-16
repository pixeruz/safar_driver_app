import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
} from "react-native";
import React from "react";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "Balansingizga 20.000 so'm tushdi",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Balansingizdan 2000 so'm safar to'lovi yechildi.",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Safaringiz bekor qilindi.",
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
		<Text style={styles.date}>2 soat avval</Text>
	</View>
);

export default function UserNotifications() {
	const renderItem = ({ item }) => <Item title={item.title} />;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
