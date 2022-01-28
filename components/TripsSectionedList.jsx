import {
	View,
	SectionList,
	StyleSheet,
	StatusBar,
	Pressable,
} from "react-native";
import React from "react";
import { Text } from "./styledComponents";
import ArrowIcon from "../images/ArrowIcon";

const DATA = [
	{
		title: "6-yanvar",
		data: ["Pizza", "Burger", "Risotto"],
	},
	{
		title: "Bugun",
		data: ["French Fries", "Onion Rings", "Fried Shrimps"],
	},
	{
		title: "Kecha",
		data: ["Water", "Coke", "Beer"],
	},
	{
		title: "3-yanvar",
		data: ["Cheese Cake", "Ice Cream"],
	},
];

const Item = ({ index, navigation }) => (
	<Pressable
		onPress={() => navigation.navigate("TripDetailScreen")}
		style={styles.item}
	>
		<View>
			<View style={styles.cityWrapper}>
				<Text style={styles.cityFirstName} semiBold>
					Toshkent
				</Text>
				<ArrowIcon />
				<Text style={styles.citySecondName} semiBold>
					Samarqand
				</Text>
			</View>
			<View style={styles.optionsWrapper}>
				<Text medium style={styles.optionsName}>
					Bo’sh joy: <Text>2 ta</Text>
				</Text>
				<Text medium style={styles.optionsName}>
					Vaqti: <Text>06:00</Text>
				</Text>
			</View>
		</View>
		<Text style={styles.statusActive} medium>
			Aktiv
		</Text>
	</Pressable>
);

export default function TripsSectionedList({ navigation }) {
	return (
		<SectionList
			sections={DATA}
			keyExtractor={(item, index) => item + index}
			renderItem={({
				item,
				index,
				section: {
					data: { length: dataLength },
				},
			}) => {
				return (
					<View>
						<Item navigation={navigation} title={item} />
						{index !== dataLength - 1 && (
							<View style={styles.pale} />
						)}
					</View>
				);
			}}
			style={styles.sectionList}
			renderSectionHeader={({ section: { title } }) => (
				<View style={styles.sectionHeader}>
					<Text medium style={styles.header}>
						{title}
					</Text>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		marginHorizontal: 16,
	},
	item: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	pale: {
		height: 1,
		marginHorizontal: 20,
		backgroundColor: "#DFE4E9",
	},
	header: {
		fontSize: 14,
		paddingHorizontal: 16,
		paddingVertical: 12,
		color: "#9BA1A7",
	},
	title: {
		fontSize: 24,
	},
	sectionList: {
		backgroundColor: "#ffffff",
	},
	sectionHeader: {
		backgroundColor: "#F7F8F9",
	},
	cityFirstName: {
		fontSize: 20,
		marginRight: 5,
	},
	citySecondName: {
		fontSize: 20,
		marginLeft: 5,
	},
	cityWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	optionsWrapper: {
		marginTop: 5,
		flexDirection: "row",
	},
	optionsName: {
		color: "#9BA1A7",
		marginRight: 10,
	},
	statusActive: {
		color: "#6FCF97",
	},
});
