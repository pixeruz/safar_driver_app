import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";

export default function SelectTripOptions({ navigation }) {
	const [smoke, setSmoke] = React.useState(true);
	const [air, setAir] = React.useState(true);
	const [baggage, setBaggage] = React.useState(true);
	// const []

	return (
		<Container scroll>
			<Text medium style={styles.subtitle}>
				3/3
			</Text>
			<Text medium style={styles.title}>
				Iltimos, to’g’ri variantni belgilang
			</Text>

			<OneOptionRow title="Chekish" data={smoke} setData={setSmoke} />
			<OneOptionRow title="Bagaj" data={baggage} setData={setBaggage} />
			<OneOptionRow title="Konditsioner" data={air} setData={setAir} />

			<Button
				onPress={() => navigation.navigate("RegistrationOTPScreen")}
				style={styles.signUpButton}
			>
				<Text bold light>
					Yo’nalish yaratish
				</Text>
			</Button>
		</Container>
	);
}

function OneOptionRow({ title, data, setData }) {
	return (
		<View style={styles.optionRow}>
			<Text medium>{title}</Text>
			<View style={styles.selectWrapper}>
				<Pressable
					onPress={() => setData(!data)}
					style={data ? styles.selectActive : styles.select}
				>
					<Text medium>Yo'q</Text>
				</Pressable>
				<Pressable
					onPress={() => setData(!data)}
					style={data ? styles.select : styles.selectActive}
				>
					<Text medium>Bor</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		marginTop: 5,
		marginBottom: 15,
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 22,
		color: "#73787D",
	},
	space: {
		backgroundColor: "#F7F8F9",
		flexGrow: 1,
		marginVertical: 15,
		borderRadius: 9,
	},
	signUpButton: {
		backgroundColor: "#771E99",
		marginTop: 20,
	},
	optionRow: {
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	selectWrapper: {
		flexDirection: "row",
		marginLeft: "auto",
		width: "60%",
	},
	selectActive: {
		borderWidth: 2,
		borderColor: "#771E99",
		borderRadius: 6,
		padding: 11,
		flexGrow: 1,
		margin: 2,
	},
	select: {
		borderWidth: 2,
		borderColor: "#F7F8F9",
		borderRadius: 6,
		backgroundColor: "#F7F8F9",
		padding: 11,
		flexGrow: 1,
		margin: 2,
	},
});
