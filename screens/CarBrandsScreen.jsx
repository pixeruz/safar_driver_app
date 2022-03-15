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
import CarsService from "../api/CarsService";

export default function CarBrandsScreen({ navigation, route }) {
	const [options, setOptions] = useOptions();
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	const Item = ({ index, navigation, title }) => {
		return (
			<Pressable
				onPress={() => {
					setOptions({
						...options,
						brand: title,
					});
					navigation.goBack();
				}}
				style={{
					...styles.item,
				}}
			>
				<View style={styles.cityContent}>
					<View style={styles.cityWrapper}>
						<Text style={styles.cityFirstName} medium>
							{title.car_name}
						</Text>
					</View>
				</View>
			</Pressable>
		);
	};

	async function initCarBrands() {
		let cars = await CarsService.getCars(options?.token);

		console.log(cars);

		if (cars.ok) {
			let grouped = _.groupBy(cars.data.cars.rows, (e) => {
				return e.cars_brand.brand_name;
			});
			if (!grouped) {
				return;
			}
			let dt = [];
			for (const car in grouped) {
				dt.push({
					title: car,
					data: grouped[car],
				});
			}
			if (Array.isArray(dt) && dt.length) {
				setData(dt);
			}
		}
	}

	React.useEffect(() => {
		try {
			initCarBrands().finally(() => {
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
