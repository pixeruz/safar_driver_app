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

export default function AddTripProperties({ navigation }) {
	const [invisibleDate, setInvisibleDate] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState("");

	const [invisibleTime, setInvisibleTime] = React.useState(false);
	const [selectedTime, setSelectedTime] = React.useState("");

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
		hideDatePicker();
	};

	const handleConfirmTime = (date) => {
		setSelectedTime(date);
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
					onPress={() => navigation.navigate("CitiesScreen")}
					style={{
						...defaultStyles.defaultInputStyles,
						...styles.inputableButton,
					}}
				>
					<Text>
						<Text style={{ color: "#9BA1A7" }}>Qaysi</Text> dan
					</Text>
				</Button>
			</View>
			<View style={styles.phoneInputView}>
				<Text medium style={styles.phoneInputViewLabel}>
					Qaysi shaharga?
				</Text>
				<Button
					onPress={() => navigation.navigate("CitiesScreen")}
					style={{
						...defaultStyles.defaultInputStyles,
						...styles.inputableButton,
					}}
				>
					<Text>
						<Text style={{ color: "#9BA1A7" }}>Qaysi</Text> ga
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
						{selectedDate.toString() || "Vaqtni kiriting"}
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
						{selectedTime.toString() || "Vaqtni tanlang"}
					</Text>
					<TimeIcon />
				</Button>
			</View>
			<Button
				onPress={() => navigation.navigate("SelectSeat")}
				style={styles.signUpButton}
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
				display="spinner"
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
