import {
	View,
	SectionList,
	StyleSheet,
	StatusBar,
	Pressable,
} from "react-native";
import React from "react";
import { Text } from "../components/styledComponents";
import ArrowIcon from "../images/ArrowIcon";

const DATA = [
	{
		title: "Farg'ona",
		data: ["Pizza", "Burger", "Risotto"],
	},
	{
		title: "Toshkent",
		data: ["French Fries", "Onion Rings", "Fried Shrimps"],
	},
	{
		title: "Namangan",
		data: ["Water", "Coke", "Beer"],
	},
	{
		title: "Andijon",
		data: ["Cheese Cake", "Ice Cream"],
	},
];

const Item = ({ index, navigation }) => (
	<Pressable onPress={() => navigation.goBack()} style={styles.item}>
		<View style={styles.cityContent}>
			<View style={styles.cityWrapper}>
				<Text style={styles.cityFirstName} medium>
					Toshkent
				</Text>
			</View>
		</View>
		<Text style={styles.statusActive} medium>
			Tanlangan
		</Text>
	</Pressable>
);

export default function CitiesScreen({ navigation }) {
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
		fontSize: 18,
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
	cityContent: {
		alignItems: "center",
		flexDirection: "row",
	},
});
