import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import TripService from "../api/TripAPI";
import Checkbox from "../components/Checkbox";
import { Button, Container, Input, Text } from "../components/styledComponents";
import { useOptions } from "../contexts/OptionsContext";

export default function SelectSeatScreen({ navigation }) {
	const [options, setOptions] = useOptions();

	const initState = {
		active: false,
		rate: "",
	};

	const [seatOne, setSeatOne] = React.useState(
		(options?.seats && options?.seats[0]) || initState
	);
	const [seatTwo, setSeatTwo] = React.useState(
		(options?.seats && options?.seats[1]) || initState
	);
	const [seatThree, setSeatThree] = React.useState(
		(options?.seats && options?.seats[2]) || initState
	);
	const [seatFour, setSeatFour] = React.useState(
		(options?.seats && options?.seats[3]) || initState
	);

	return (
		<Container scroll>
			<Text medium style={styles.subtitle}>
				2/3
			</Text>
			<Text medium style={styles.title}>
				Iltimos, sizda bor o’rindiqlarni belgilab, ular uchun narx
				o’rnating
			</Text>

			<OneSeatComponent
				index={0}
				data={seatOne}
				setData={setSeatOne}
				name="Haydovchi oldi o’rindig’i"
			/>

			<OneSeatComponent
				index={1}
				data={seatTwo}
				setData={setSeatTwo}
				name="Orqa chap o’rindiq"
			/>

			<OneSeatComponent
				index={2}
				data={seatThree}
				setData={setSeatThree}
				name="Orqa o’rta o’rindiq"
			/>

			<OneSeatComponent
				index={3}
				data={seatFour}
				setData={setSeatFour}
				name="Orqa o’ng o’rindiq"
			/>

			<Text style={styles.helper}>
				Barcha o'rinlarga bir xil narx belgilash uchun old o'rindiqqa
				narx belgilagach, "Davom ettirish" tugmasini uzoqroq bosib
				turing.
			</Text>

			<Button
				disabled={
					!options?.seats?.filter((e) => e.active && e.rate).length
				}
				onPress={() => navigation.navigate("SelectTripOptions")}
				style={styles.signUpButton}
			>
				<Text bold light>
					Davom ettirish
				</Text>
			</Button>
		</Container>
	);
}

function OneSeatComponent({ name, data, setData, index }) {
	const [options, setOptions] = useOptions();
	const inputRef = React.useRef();

	React.useEffect(() => {
		options.seats = options?.seats || [];
		options.seats[index] = data;
		setOptions({
			...options,
		});
	}, [data]);

	return (
		<Pressable
			disabled={data.active}
			onPress={() => setData({ ...data, active: true })}
			style={styles.oneSeatView}
		>
			<Checkbox
				checked={data.active}
				setChecked={(value) =>
					setData({ rate: value ? data.rate : "", active: value })
				}
				focus={() => () => inputRef.current.focus()}
				style={styles.checkbox}
			/>
			<View style={styles.oneSeatViewDetailWrapper}>
				<Text style={styles.seatTitle}>{name}</Text>
				<View style={styles.inputWrapper}>
					<Input
						innerRef={inputRef}
						editable={data.active}
						placeholder={data.active ? "Narx" : "Yoqilmagan"}
						placeholderTextColor="#9BA1A7"
						maxLength={7}
						onBlur={(e) => {
							if (data.rate == "") {
								setData({ ...data, active: false });
							}
						}}
						onChangeText={(e) => setData({ ...data, rate: e })}
						value={data.rate}
						keyboardType="decimal-pad"
						style={styles.inputStyle}
					/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text style={styles.sumText}>so'm</Text>
					</View>
				</View>
			</View>
			{!data.active && <View style={StyleSheet.absoluteFill}></View>}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		marginTop: 5,
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 22,
		color: "#73787D",
	},
	helper: {
		fontSize: 12,
		lineHeight: 22,
		color: "#73787D",
		marginTop: 20,
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
	oneSeatView: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},
	oneSeatViewDetailWrapper: {
		flexGrow: 1,
		marginLeft: 10,
	},
	inputStyle: {
		marginVertical: 0,
	},
	sumText: {
		position: "absolute",
		right: "5%",
		alignSelf: "center",
		color: "#9BA1A7",
	},
	inputWrapper: {
		position: "relative",
	},
	checkbox: {
		marginRight: 5,
	},
	seatTitle: {
		marginBottom: 8,
	},
});
