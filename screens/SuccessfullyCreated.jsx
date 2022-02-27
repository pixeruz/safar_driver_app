import React from "react";
import { Button, Container, Text } from "../components/styledComponents";
import { View, StyleSheet, Image } from "react-native";
import LocationIcon from "../images/Location";
import ArrowIcon from "../images/ArrowIcon";
import UserGroupIcon from "../images/UserGroup";
import CalendarIcon from "../images/CalendarIcon";
import TimeIcon from "../images/TimeIcon";
import { useOptions } from "../contexts/OptionsContext";
import moment from "moment";

export default function SuccessfullyCreated({ navigation, route }) {
	const { data } = route.params;
	const [options] = useOptions();
	moment.locale("uz-latn");

	return (
		<>
			<Container scroll>
				<Text style={styles.title} bold>
					Sizning yo’nalishingiz yaratildi
				</Text>
				<View style={styles.info}>
					<LocationIcon />
					<Text style={styles.cityNames} semiBold>
						{data.trip.leave_region.city_name}
					</Text>
					<ArrowIcon />
					<Text style={styles.cityNames} semiBold>
						{data.trip.come_region.city_name}
					</Text>
				</View>
				<View style={styles.pale}></View>
				<View style={styles.detailSection}>
					<Image
						source={
							options?.image
								? {
										uri:
											"https://safar.pixer.uz/api/cars/uploads/" +
											options?.image,
								  }
								: require("../images/nophoto.png")
						}
						width={92}
						height={68}
						style={styles.image}
					/>
					<View>
						<Text style={styles.carName} semiBold>
							{data?.trip?.driver.car?.cars_list?.car_name}
						</Text>
						<Text style={styles.userName} semiBold>
							{data?.trip?.driver.car?.cars_list?.car_name}
						</Text>
						<Text style={styles.topPrice} semiBold>
							{
								data.seats.sort(
									(a, b) => a.rate - 0 - (b.rate - 0)
								)[0].rate
							}
						</Text>
					</View>
				</View>
				<View style={styles.infoSection}>
					<View style={styles.infoGroup}>
						<UserGroupIcon />
						<Text semiBold style={styles.infoGroupItemTitle}>
							Nechta kishi:
						</Text>
						<Text style={styles.infoGroupItemText}>
							{
								data.seats.filter((e) => e.status == "ACTIVE")
									.length
							}
						</Text>
					</View>
					<View style={styles.infoGroup}>
						<CalendarIcon />
						<Text semiBold style={styles.infoGroupItemTitle}>
							Sana:
						</Text>
						<Text style={styles.infoGroupItemText}>
							{moment(data.trip.trip_time).format("LL")}
						</Text>
					</View>
					<View style={styles.infoGroup}>
						<TimeIcon />
						<Text semiBold style={styles.infoGroupItemTitle}>
							Vaqti:
						</Text>
						<Text style={styles.infoGroupItemText}>
							{moment(data.trip.trip_time).format("LT")}
						</Text>
					</View>
				</View>
			</Container>
			<Button
				style={styles.submitButton}
				onPress={() => {
					navigation.reset({
						index: 0,
						routes: [
							{
								name: "TabBarNavigator",
							},
						],
					});
				}}
			>
				<Text bold light>
					Asosiyga qaytish
				</Text>
			</Button>
		</>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		marginTop: 20,
		textAlign: "center",
	},
	infoGroup: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 5,
	},
	info: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 50,
	},
	cityNames: {
		fontSize: 16,
		marginHorizontal: 10,
	},
	pale: {
		height: 1,
		backgroundColor: "#DFE4E9",
		marginVertical: 30,
	},
	detailSection: {
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	infoSection: {
		marginTop: 20,
	},
	image: {
		width: "35%",
		height: 80,
		borderRadius: 4,
		marginRight: 10,
	},
	carName: {
		fontSize: 16,
	},
	userName: {
		color: "#771E99",
		fontSize: 14,
	},
	topPrice: {
		fontSize: 25,
		marginTop: 10,
	},
	infoGroupItemTitle: {
		marginLeft: 5,
		fontSize: 14,
		color: "#9BA1A7",
	},
	infoGroupItemText: {
		marginLeft: 5,
	},
	submitButton: {
		backgroundColor: "#771E99",
		margin: 16,
	},
});
