import React from "react";
import { View, StyleSheet } from "react-native";
import {
	Button,
	Container,
	defaultStyles,
	Input,
	Text,
} from "../components/styledComponents";
import CalendarIcon from "../images/CalendarIcon";
import TimeIcon from "../images/TimeIcon";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useOptions } from "../contexts/OptionsContext";

moment.locale("uz-latin"); // en

export default function AddTripProperties({ navigation }) {
	const [options, setOptions] = useOptions();
	const [invisibleDate, setInvisibleDate] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState(
		options?.selectedDate
	);

	const [invisibleTime, setInvisibleTime] = React.useState(false);
	const [selectedTime, setSelectedTime] = React.useState(
		options?.selectedTime
	);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setInvisibleDate(false);
	};

	const hideTimePicker = () => {
		setInvisibleTime(false);
	};

	const handleConfirmDate = (date) => {
		setSelectedDate(date);
		setOptions({
			...options,
			selectedDate: date,
		});
		hideDatePicker();
	};

	const handleConfirmTime = (date) => {
		setSelectedTime(date);
		setOptions({
			...options,
			selectedTime: date,
		});
		hideTimePicker();
	};

	return (
		<Container scroll>
			<Text medium style={styles.subtitle}>
				1/3
			</Text>
			<Text medium style={styles.title}>
				Yangi yo’nalish yaratish uchun shaharlarni belgilang
			</Text>
			<View style={styles.phoneInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Qaysi shahardan?
				</Text>
				<Button
					onPress={() =>
						navigation.navigate("CitiesScreen", {
							type: "from",
						})
					}
					style={{
						...defaultStyles.defaultInputStyles,
						...styles.inputableButton,
					}}
				>
					<Text>
						<Text style={{ color: "#9BA1A7" }}>
							{options?.from ? options?.from?.city_name : "Qaysi"}
						</Text>{" "}
						dan
					</Text>
				</Button>
			</View>
			<View style={styles.phoneInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Qaysi shaharga?
				</Text>
				<Button
					onPress={() =>
						navigation.navigate("CitiesScreen", {
							type: "to",
						})
					}
					style={{
						...defaultStyles.defaultInputStyles,
						...styles.inputableButton,
					}}
				>
					<Text>
						<Text style={{ color: "#9BA1A7" }}>
							{options?.to ? options?.to?.city_name : "Qaysi"}
						</Text>{" "}
						ga
					</Text>
				</Button>
			</View>
			<View style={styles.phoneInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Ketish kuni sanasi
				</Text>
				<Button
					style={{
						...defaultStyles.defaultInputStyles,
						...styles.inputableButton,
					}}
					onPress={() => {
						setInvisibleDate(!invisibleDate);
					}}
				>
					<Text style={styles.buttonText}>
						{selectedDate
							? moment(selectedDate).format("ll")
							: "Sanani kiriting"}
					</Text>

					<CalendarIcon />
				</Button>
			</View>
			<View style={styles.phoneInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Ketish vaqti
				</Text>
				<Button
					onPress={() => {
						setInvisibleTime(!invisibleTime);
					}}
					style={{
						...defaultStyles.defaultInputStyles,
						...styles.inputableButton,
					}}
				>
					<Text style={styles.buttonText}>
						{selectedTime
							? moment(selectedTime).format("HH:mm")
							: "Vaqtni tanlang"}
					</Text>
					<TimeIcon />
				</Button>
			</View>
			<Button
				onPress={() => navigation.navigate("SelectSeat")}
				style={styles.signUpButton}
				disabled={
					!(
						options?.from &&
						options?.to &&
						selectedDate &&
						selectedTime
					)
				}
			>
				<Text bold light>
					Davom ettirish
				</Text>
			</Button>

			<DateTimePickerModal
				isVisible={invisibleDate}
				mode="date"
				onConfirm={handleConfirmDate}
				onCancel={hideDatePicker}
				minimumDate={new Date()}
				renderToHardwareTextureAndroid
			/>

			<DateTimePickerModal
				isVisible={invisibleTime}
				mode="time"
				onConfirm={handleConfirmTime}
				onCancel={hideTimePicker}
				minimumDate={new Date()}
			/>
		</Container>
	);
}

const styles = StyleSheet.create({
	logoView: {
		marginTop: 10,
		marginBottom: 30,
	},
	title: {
		fontSize: 16,
		marginTop: 5,
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
	loginButton: {
		backgroundColor: "#DFE4E9",
	},
	phoneInputView: {
		marginTop: 20,
	},
	phoneInputViewLabel: {
		fontSize: 14,
		color: "#222222",
	},
	inputableButton: {
		textAlign: "left",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	buttonText: {
		marginRight: "auto",
	},
});
