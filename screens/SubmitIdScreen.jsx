import React from "react";
import { View, StyleSheet, Image, Pressable, TextInput } from "react-native";
import {
	Button,
	Container,
	defaultStyles,
	Input,
	Text,
} from "../components/styledComponents";
import * as ImagePicker from "expo-image-picker";
import { useOptions } from "../contexts/OptionsContext";
import CarsService from "../api/CarsService";

export default function SubmitIdScreen({ navigation }) {
	const [photoOfFrontOfId, setPhotoOfFrontOfId] = React.useState();
	const [carNumber, setCarNumber] = React.useState("");
	const [options, setOptions] = useOptions();

	const pickFrontOfId = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setPhotoOfFrontOfId(result.uri);
			setOptions({
				...options,
				licence: result.uri,
			});
		}
	};

	React.useEffect(() => {
		(async () => {
			setOptions({
				...options,
				brand_color: "#000000",
			});
		})();
	}, []);

	// const pickBackOfId = async () => {
	// 	// No permissions request is necessary for launching the image library
	// 	let result = await ImagePicker.launchImageLibraryAsync({
	// 		mediaTypes: ImagePicker.MediaTypeOptions.Images,
	// 		allowsEditing: true,
	// 		aspect: [4, 3],
	// 		quality: 1,
	// 	});

	// 	if (!result.cancelled) {
	// 		setPhotoOfBackOfId(result.uri);
	// 	}
	// };

	return (
		<Container>
			<Text medium style={styles.subtitle}>
				3/4
			</Text>
			<Text medium style={styles.title}>
				Haydovchilik guvohnomasini qo’shish
			</Text>

			<Button onPress={pickFrontOfId} style={styles.selectIdButton}>
				<Image
					source={
						photoOfFrontOfId
							? { uri: photoOfFrontOfId }
							: require("../images/noid.png")
					}
					style={styles.idPhoto}
				/>
				<Text semiBold>Guvohnoma</Text>
				<Text style={styles.idPhotoEditText} medium>
					O'zgartirish
				</Text>
			</Button>

			{/* <Button onPress={pickBackOfId} style={styles.selectIdButton}>
				<Image
					source={
						photoOfBackOfId
							? { uri: photoOfBackOfId }
							: require("../images/noid.png")
					}
					style={styles.idPhoto}
				/>
				<Text semiBold>Guvohnoma orqa tomoni</Text>
				<Text style={styles.idPhotoEditText} medium>
					O'zgartirish
				</Text>
			</Button> */}

			<View style={styles.carNumberView}>
				<Text semiBold>Mashina raqami</Text>
				<TextInput
					placeholder="Mashina raqamini kiriting"
					style={{
						...defaultStyles.defaultInputStyles,
						marginTop: 10,
					}}
					value={carNumber}
					onChangeText={(e) => setCarNumber(e)}
				/>
			</View>

			<Pressable
				onPress={() => navigation.navigate("CarBrandsScreen")}
				style={styles.carNumberView}
			>
				<Text semiBold>Mashina markasi</Text>
				<Text
					style={{
						...defaultStyles.defaultInputStyles,
						marginTop: 10,
					}}
				>
					{options?.brand
						? options?.brand?.car_name
						: "Mashina markasini tanlang"}
				</Text>
			</Pressable>

			<Button
				disabled={!photoOfFrontOfId || !carNumber}
				onPress={() => {
					if (photoOfFrontOfId && carNumber) {
						setOptions({
							...options,
							car_number: carNumber,
						});
						navigation.navigate("SubmitPhotoScreen");
					}
				}}
				style={styles.submitButton}
			>
				<Text bold light>
					Davom ettirish
				</Text>
			</Button>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	logoView: {
		marginTop: 10,
		marginBottom: 30,
	},
	title: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 22,
		marginTop: 5,
		color: "#73787D",
	},
	carNumberView: {
		marginTop: 20,
	},
	submitButton: {
		marginTop: "auto",
		backgroundColor: "#771E99",
	},
	carColors: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	carColor: {
		width: "32%",
		borderWidth: 1,
	},
	idPhoto: {
		width: 46,
		height: 46,
		marginRight: 15,
		borderRadius: 8,
	},
	selectIdButton: {
		justifyContent: "flex-start",
		paddingHorizontal: 0,
		flexDirection: "row",
		paddingVertical: 0,
		marginTop: 5,
	},
	idPhotoEditText: {
		letterSpacing: 0.5,
		color: "#771E99",
		marginLeft: "auto",
	},
});
