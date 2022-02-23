import {
	View,
	SectionList,
	StyleSheet,
	StatusBar,
	Pressable,
	ActivityIndicator,
} from "react-native";
import React from "react";
import { Text } from "../components/styledComponents";
import ArrowIcon from "../images/ArrowIcon";
import RegionsService from "../api/RegionsApi";
import { useOptions } from "../contexts/OptionsContext";
import _ from "lodash";

export default function CitiesScreen({ navigation, route }) {
	const { type } = route.params;
	const [options, setOptions] = useOptions();
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	const Item = ({ index, navigation, title }) => {
		return (
			<Pressable
				onPress={() => {
					if (type == "from") {
						setOptions({
							...options,
							from: title,
						});
					} else {
						setOptions({
							...options,
							to: title,
						});
					}
					navigation.goBack();
				}}
				disabled={
					(type == "from" &&
						options?.to?.city_id == title?.city_id) ||
					(type == "to" && options?.from?.city_id == title?.city_id)
				}
				style={{
					...styles.item,
					opacity:
						(type == "from" &&
							options?.to?.city_id == title?.city_id) ||
						(type == "to" &&
							options?.from?.city_id == title?.city_id)
							? 0.4
							: 1,
				}}
			>
				<View style={styles.cityContent}>
					<View style={styles.cityWrapper}>
						<Text style={styles.cityFirstName} medium>
							{title.city_name}
						</Text>
					</View>
				</View>
				{((type == "from" &&
					options?.from?.city_id == title?.city_id) ||
					(type == "to" &&
						options?.to?.city_id == title.city_id)) && (
					<Text style={styles.statusActive} medium>
						Tanlangan
					</Text>
				)}
			</Pressable>
		);
	};

	async function initCities() {
		let cities = await RegionsService.getCities(options?.token);

		if (cities.ok) {
			let regions = _.groupBy(cities.data.cities.rows, (e) => {
				return e.region.region_name;
			});
			if (!regions) {
				return;
			}
			let dt = [];
			for (const region in regions) {
				dt.push({
					title: region,
					data: regions[region],
				});
			}
			if (Array.isArray(dt) && dt.length) {
				setData(dt);
			}
		}
	}

	React.useEffect(() => {
		try {
			initCities().finally(() => {
				setLoading(false);
			});
		} catch (error) {
			navigation.goBack();
		}
	}, []);

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size={"large"} color="#000000" />
			</View>
		);
	}

	return (
		<SectionList
			sections={data}
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
						<Item navigation={navigation} title={item} />
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
		fontSize: 18,
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
	cityContent: {
		alignItems: "center",
		flexDirection: "row",
	},
});
