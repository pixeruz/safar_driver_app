import React from "react";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";
import { useOptions } from "../contexts/OptionsContext";
import moment from "moment";
import TripService from "../api/TripAPI";

export default function SelectTripOptions({ navigation }) {
	const [smoke, setSmoke] = React.useState(options?.smoke || false);
	const [air, setAir] = React.useState(options?.air || false);
	const [baggage, setBaggage] = React.useState(options?.baggage || true);
	const [loading, setLoading] = React.useState(false);
	const [options, setOptions] = useOptions();

	React.useEffect(() => {
		setOptions({
			...options,
			smoke,
			air,
			baggage,
		});
	}, [smoke, air, baggage]);

	const submit = async () => {
		setLoading(true);

		try {
			if (
				options &&
				options?.token &&
				options?.to &&
				options?.from &&
				options?.seats?.length
			) {
				// let date = options?.selectedDate?.toLocaleDateString();
				let date = moment(options?.selectedDate).format("YYYY-MM-DD");
				let time = moment(options?.selectedTime).format("hh:mm:ss a");

				let mainTime = moment(
					moment(`${date} ${time}`, `YYYY-MM-DD HH:mm:ss a`)
				).toLocaleString();

				let sortSeats = options?.seats?.map((item) => {
					return [
						item?.active && item?.rate ? "ACTIVE" : "ORDERED",
						item?.rate || 0,
					];
				});

				let trip = await TripService.createTrip(
					options?.token,
					options?.from?.city_id,
					options?.to?.city_id,
					sortSeats,
					mainTime,
					options?.smoke,
					options?.air,
					options?.baggage
				);

				if (trip?.ok) {
					navigation.navigate("SuccessfullyCreated", {
						data: trip.data,
					});
				}

				if (!trip?.ok) {
					let error =
						trip.message == "You were banned!"
							? "Siz bloklangansiz, to'liqroq ma'lumot olish uchun bizga qo'ng'iroq qiling."
							: trip.message;
					Alert.alert("Xatolik yuz berdi", error + "");
				}
			}
		} catch (error) {
			Alert.alert("Xatolik yuz berdi", error + "");
		} finally {
			setLoading(false);
		}
	};
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
				disabled={loading}
				onPress={() => submit()}
				style={styles.signUpButton}
			>
				<Text bold light>
					{!loading ? "Yo’nalish yaratish" : "Yuklanmoqda"}
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
					onPress={() => setData(false)}
					style={!data ? styles.selectActive : styles.select}
				>
					<Text medium>Yo'q</Text>
				</Pressable>
				<Pressable
					onPress={() => setData(true)}
					style={!data ? styles.select : styles.selectActive}
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
