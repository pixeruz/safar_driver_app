import {
	View,
	SectionList,
	StyleSheet,
	StatusBar,
	Pressable,
	RefreshControl,
	ActivityIndicator,
} from "react-native";
import React from "react";
import { Text } from "./styledComponents";
import ArrowIcon from "../images/ArrowIcon";
import { useOptions } from "../contexts/OptionsContext";
import TripService from "../api/TripAPI";
import moment from "moment";
import _ from "lodash";

moment.locale("uz-UZ");

const Item = ({ item, navigation }) => {
	return (
		<Pressable
			onPress={() => navigation.navigate("TripDetailScreen")}
			style={styles.item}
		>
			<View>
				<View style={styles.cityWrapper}>
					<Text style={styles.cityFirstName} semiBold>
						{item.leave_region.city_name}
					</Text>
					<ArrowIcon />
					<Text style={styles.citySecondName} semiBold>
						{item.come_region.city_name}
					</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<Text medium style={styles.optionsName}>
						Bo’sh joy:{" "}
						<Text>
							{
								item.car_seats_statuses.filter(
									(e) => e.status == "ACTIVE"
								).length
							}{" "}
							ta
						</Text>
					</Text>
					<Text medium style={styles.optionsName}>
						Vaqti:{" "}
						<Text>{moment(item.trip_time).format("LT")}</Text>
					</Text>
				</View>
			</View>
			<Text
				style={
					item.trip_status == "WAITING"
						? styles.statusActive
						: styles.statusInactive
				}
				medium
			>
				{item.trip_status == "WAITING" ? "Aktiv" : "Tugagan"}
			</Text>
		</Pressable>
	);
};

export default function TripsSectionedList({ navigation }) {
	const [options] = useOptions();
	const [trips, setTrips] = React.useState([]);
	const [refreshing, setRefreshing] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	async function loadData() {
		setRefreshing(true);

		try {
			let data = await TripService.getTrips(options?.token);
			if (data.ok) {
				if (data.data.trip) {
					let arr = data.data.trip;
					arr = arr.map((e) => {
						return {
							...e,
							trip_etime: moment(e.trip_time).format("LL"),
						};
					});
					arr = _.groupBy(arr, (e) => e.trip_etime);
					let a = [];
					for (const item in arr) {
						a.push({
							title: item,
							data: arr[item],
						});
					}
					setTrips(a);
				}
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
					Hoziroq safar yarating, mijozlar sizni kutishmoqda 🔥
				</Text>
			</View>
		);
	}

	return (
		<SectionList
			sections={trips}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
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
						<Item
							navigation={navigation}
							title={item}
							item={item}
						/>
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
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
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
	statusInactive: {
		color: "red",
	},
	subtext: {
		fontSize: 18,
		paddingHorizontal: 20,
		textAlign: "center",
	},
});
