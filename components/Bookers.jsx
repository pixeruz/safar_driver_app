import React from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "../components/styledComponents";
import RightArrow from "../images/RightArrow";
import ModalUserInfo from "./ModalUserInfo";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
];

const Item = ({ title, detail, setVisibility }) => (
	<Pressable onPress={() => setVisibility(true)} style={styles.item}>
		<Image
			source={{
				uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			}}
			width={56}
			height={56}
			style={styles.avatar}
		/>
		<View style={styles.details}>
			<Text medium style={styles.title}>
				{title}
			</Text>
			<Text regular style={styles.subtitle}>
				{detail}
			</Text>
		</View>
		<RightArrow />
	</Pressable>
);

export default function Bookers() {
	const [visibility, setVisibility] = React.useState(false);

	return (
		<View>
			<Item
				title="Timur Kayumov"
				setVisibility={setVisibility}
				detail={"Haydovchi oldi"}
			/>
			<Item
				title="Amitabh Batchan"
				setVisibility={setVisibility}
				detail={"Orqa chap o’rindiq"}
			/>
			<Item
				title="Alex Pushkin"
				setVisibility={setVisibility}
				detail={"Orqa o’rta o’rindiq"}
			/>
			<ModalUserInfo
				visibility={visibility}
				setVisibility={setVisibility}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		paddingHorizontal: 16,
		flexDirection: "row",
		paddingVertical: 6,
		alignItems: "center",
		paddingRight: 30,
	},
	title: {
		fontSize: 16,
	},
	avatar: {
		width: 56,
		height: 56,
		borderRadius: 50,
	},
	subtitle: {
		fontSize: 14,
		color: "#222222",
	},
	details: {
		marginLeft: 12,
		marginRight: "auto",
	},
});
