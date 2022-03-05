import {
	View,
	FlatList,
	StyleSheet,
	StatusBar,
	Pressable,
	RefreshControl,
	ActivityIndicator,
	Image,
	Dimensions,
} from "react-native";
import React from "react";
import { Button, Text } from "./styledComponents";
import ArrowIcon from "../images/ArrowIcon";
import { useOptions } from "../contexts/OptionsContext";
import TripService from "../api/TripAPI";
import moment from "moment";
import _ from "lodash";
import LocationIcon from "../images/Location";
import TimeIcon from "../images/TimeIcon";
import CalendarIcon from "../images/CalendarIcon";

const { width, height } = Dimensions.get("screen");

moment.locale("uz-UZ");

const Item = ({ item, navigation, trips, setTrips, index }) => {
	const [loading, setLoading] = React.useState(false);
	const [options, setOptions] = useOptions();

	const submit = async (status) => {
		setLoading(true);
		try {
			let data = await TripService.submitTripRequest(
				options?.token,
				item.ordered_seat_id,
				status,
				item.tripper_id
			);
			console.log(data);
			if (data.ok) {
				trips.splice(index, 1);
				setTrips([...trips]);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.item}>
			<Image
				source={require("../images/nophoto.png")}
				style={styles.image}
				resizeMode="contain"
				resizeMethod="resize"
				width={(width / 100) * 13}
				height={(width / 100) * 13}
			/>
			<View style={styles.informations}>
				<View style={styles.cityWrapper}>
					<Text style={styles.cityFirstName} semiBold>
						{
							item.car_seats_status.driver_trip.leave_region
								.city_name
						}
					</Text>
					<ArrowIcon />
					<Text style={styles.citySecondName} semiBold>
						{
							item.car_seats_status.driver_trip.come_region
								.city_name
						}
					</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<View style={styles.options}>
						<TimeIcon />
						<Text style={styles.optionsName} semiBold>
							{moment(
								item.car_seats_status.driver_trip.createdAt
							).format("LT")}
						</Text>
					</View>

					<View style={styles.options}>
						<CalendarIcon />
						<Text style={styles.optionsName} semiBold>
							{moment(
								item.car_seats_status.driver_trip.createdAt
							).format("LL")}
						</Text>
					</View>
				</View>
				<Text medium style={styles.position}>
					{item?.car_seats_status?.index == 0
						? "Haydovchi oldi"
						: item?.car_seats_status?.index == 1
						? "Orqa chap o'rindiq"
						: item?.car_seats_status?.index == 2
						? "Orqa o'rta"
						: "Orqa o'ng"}
				</Text>
				<Text style={styles.alertText}>
					Ushbu yo’nalisingizni bron qilishga ariza yuborildi.
				</Text>
				<View style={styles.buttons}>
					<Button
						disabled={loading}
						onPress={() => submit("cancel")}
						style={styles.redbutton}
					>
						<Text medium style={{ color: "#EB5757" }}>
							Bekor qilish
						</Text>
					</Button>
					<Button
						onPress={() => submit("accept")}
						disabled={loading}
						style={styles.confirmbutton}
					>
						<Text medium style={{ color: "white" }}>
							Tasdiqlash
						</Text>
					</Button>
				</View>
			</View>
		</View>
	);
};

export default function NotificationsList({ navigation }) {
	const [options] = useOptions();
	const [trips, setTrips] = React.useState([]);
	const [refreshing, setRefreshing] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	async function loadData() {
		setRefreshing(true);

		try {
			let requests = await TripService.getRequests(options?.token);
			if (requests.data.seats.rows) {
				setTrips(requests.data.seats.rows);
			}
		} catch (error) {
		} finally {
			setRefreshing(false);
		}
	}

	React.useEffect(() => {
		loadData();
		return () => {};
	}, []);

	const wait = (timeout) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		loadData();
	}, []);

	if (!refreshing && !trips?.length) {
		return (
			<View style={styles.container}>
				<Text style={styles.subtext} medium>
					Hoziroq safar yarating va ko'plab mijozlarni qabul qiling 🔥
				</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={trips}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item, index }) => {
				return (
					<View>
						<Item
							navigation={navigation}
							title={item}
							item={item}
							trips={trips}
							index={index}
							setTrips={setTrips}
						/>
						{index !== trips.length - 1 && (
							<View style={styles.pale} />
						)}
					</View>
				);
			}}
			style={styles.sectionList}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		marginHorizontal: 16,
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttons: {
		flexDirection: "row",
		marginTop: 14,
		justifyContent: "space-between",
	},
	item: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	informations: {
		paddingLeft: 16,
		width: "87%",
	},
	redbutton: {
		width: "49%",
		borderColor: "#EB5757",
		borderWidth: 2,
		borderRadius: 3,
		paddingVertical: 15,
	},
	confirmbutton: {
		width: "49%",
		backgroundColor: "#771E99",
		borderRadius: 4,
	},
	image: {
		borderRadius: 50,
		width: "13%",
		height: (width / 100) * 13,
	},
	pale: {
		height: 1,
		marginHorizontal: 20,
		backgroundColor: "#DFE4E9",
	},
	cityFirstName: {
		fontSize: 20,
		marginRight: 5,
	},
	citySecondName: {
		fontSize: 20,
		marginLeft: 5,
	},
	position: {
		marginVertical: 10,
		color: "#771E99",
		fontSize: 12,
	},
	cityWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	optionsWrapper: {
		marginTop: 5,
		flexDirection: "row",
	},
	alertText: {
		color: "#9BA1A7",
		fontSize: 12,
	},
	options: {
		flexDirection: "row",
		marginRight: 10,
	},
	optionsName: {
		color: "#9BA1A7",
		marginLeft: 5,
	},
});
