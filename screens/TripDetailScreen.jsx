import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Bookers from "../components/Bookers";
import ModalUserInfo from "../components/ModalUserInfo";
import Pale from "../components/Pale";
import { Container, Text } from "../components/styledComponents";
import ArrowIcon from "../images/ArrowIcon";
import Back from "../images/Back";
import CalendarIcon from "../images/CalendarIcon";
import TimeIcon from "../images/TimeIcon";
import moment from "moment";

export default function TripDetailScreen({ navigation, route }) {
	moment.locale("uz-latn");
	const { data } = route.params;

	console.log(data);
	return (
		<Container style={styles.container}>
			<View style={styles.setPadding}>
				<Pressable
					onPress={() => navigation.goBack()}
					style={styles.backButton}
				>
					<Back />
				</Pressable>
			</View>
			<View style={styles.informations}>
				<View style={styles.cityWrapper}>
					<Text style={styles.cityFirstName} semiBold>
						{data?.leave_region?.city_name}
					</Text>
					<ArrowIcon />
					<Text style={styles.citySecondName} semiBold>
						{data?.come_region?.city_name}
					</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<View style={styles.status}>
						<Text semiBold style={styles.statusActive}>
							{data?.trip_status == "WAITING"
								? "Faol"
								: "Tugatilgan"}
						</Text>
					</View>

					<View style={styles.options}>
						<TimeIcon />
						<Text style={styles.optionsName} semiBold>
							{moment(data?.trip_time).format("LT")}
						</Text>
					</View>

					<View style={styles.options}>
						<CalendarIcon />
						<Text style={styles.optionsName} semiBold>
							{moment(data?.trip_time).format("LL")}
						</Text>
					</View>
				</View>
			</View>
			<Pale />
			<ScrollView>
				<View style={styles.tripOptionWrapper}>
					<TripOption name="Chekish" answer={data?.is_smoking} />
					<TripOption name="Bagaj" answer={data?.is_luggage} />
					<TripOption
						name="Konditsioner"
						answer={data?.is_conditioner}
					/>
				</View>

				<View style={styles.seatsSection}>
					<Text style={styles.seatsSectionTitle} bold>
						Bo'sh o'rindiqlar
					</Text>
					<Image
						style={{ marginVertical: 15 }}
						source={require("../images/debug.png")}
					/>

					{data?.car_seats_statuses
						?.filter((e) => e.status == "ACTIVE")
						?.sort((a, b) => a.index - b.index)
						.map((seat, i) => (
							<SeatOption
								key={i}
								name={
									seat.index == 1
										? "Haydovchi oldi"
										: seat.index == 2
										? "Orqa o'ng taraf"
										: seat.index == 3
										? "Orqa o'rta"
										: "Orqa chap taraf"
								}
								price={seat.price + " so'm"}
								isBooked={seat.status == "ORDERED"}
							/>
						))}
				</View>
				<Pale />
				<View style={styles.seatsSection}>
					<Text style={styles.seatsSectionTitle} bold>
						Bronlagan yo???lovchilar
					</Text>
				</View>
				<Bookers
					data={data?.car_seats_statuses.filter((e) => e.order_seat)}
				/>
			</ScrollView>
		</Container>
	);
}

function TripOption({ name, answer = false }) {
	return (
		<View style={styles.tripOption}>
			<View style={styles.tripOptionFirstRow}>
				<View style={answer ? styles.active : styles.unactive}></View>
				<Text medium style={styles.optionName}>
					{name}
				</Text>
			</View>
			<Text medium status={styles.tripOptionAnswer}>
				{answer ? "Bor" : "Yo'q"}
			</Text>
		</View>
	);
}

function SeatOption({ name, price, isBooked }) {
	return (
		<View style={styles.seatOption}>
			<View style={styles.seatOptionFirstRow}>
				<Text semiBold style={styles.seatOptionName}>
					{name}
				</Text>
				<Text semiBold style={styles.seatOptionStatus}>
					{isBooked ? "Band" : "Bo'sh"}
				</Text>
			</View>
			<Text style={styles.seatOptionPrice} semiBold>
				{price}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	setPadding: {
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	container: {
		padding: 0,
	},
	backButton: {
		paddingVertical: 10,
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
		marginTop: 10,
	},
	optionsWrapper: {
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	options: {
		color: "#9BA1A7",
		marginRight: 10,
		alignItems: "center",
		flexDirection: "row",
	},
	optionsName: {
		marginLeft: 3,
		fontSize: 14,
	},
	statusActive: {
		color: "#27AE60",
		fontSize: 12,
	},
	status: {
		backgroundColor: "#27AE6044",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 2,
		paddingHorizontal: 8,
		marginRight: 10,
	},
	informations: {
		paddingHorizontal: 16,
		paddingBottom: 20,
	},
	tripOption: {
		backgroundColor: "#F7F8F9",
		padding: 11,
		width: "32%",
		borderRadius: 6,
	},
	active: {
		width: 6,
		height: 6,
		borderRadius: 50,
		backgroundColor: "#27AE60",
		marginRight: 5,
	},
	unactive: {
		width: 6,
		height: 6,
		borderRadius: 50,
		backgroundColor: "#EB5757",
		marginRight: 5,
	},
	tripOptionFirstRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	tripOptionWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
		paddingHorizontal: 16,
	},
	optionName: {
		fontSize: 12,
	},
	tripOptionAnswer: {
		fontSize: 16,
	},
	seatsSection: {
		marginTop: 20,
		paddingHorizontal: 16,
		paddingBottom: 20,
	},
	seatsSectionTitle: {
		fontSize: 20,
	},
	seatOption: {
		borderColor: "#DFE4E9",
		borderWidth: 2,
		padding: 16,
		borderRadius: 6,
		marginVertical: 5,
	},
	seatOptionName: {
		fontSize: 12,
	},
	seatOptionStatus: {
		fontSize: 12,
		color: "#771E99",
	},
	seatOptionFirstRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	seatOptionPrice: {
		fontSize: 24,
	},
});
