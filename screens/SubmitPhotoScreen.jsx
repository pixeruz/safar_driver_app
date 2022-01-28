import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";
import PlusCircle from "../images/PlusCircle";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("screen");

export default function SubmitPhotoScreen({ navigation }) {
	const [carPhoto, setCarPhoto] = React.useState();

	const pickCarPhoto = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setCarPhoto(result.uri);
		}
	};

	return (
		<Container>
			<Text medium style={styles.subtitle}>
				4/4
			</Text>
			<Text medium style={styles.title}>
				Avtomobil rasmi
			</Text>

			<Text medium style={styles.subtitle}>
				Iltimos, avtomobilingiz rasmini namunada ko’rsatilgandek qilib
				rasmga oling
			</Text>

			{!carPhoto && (
				<>
					<View style={styles.images}>
						<Image
							width={"47%"}
							resizeMethod="resize"
							resizeMode="contain"
							style={styles.carImage}
							source={require("../images/sample_correct_car.jpg")}
						/>
						<Image
							width={"47%"}
							resizeMethod="resize"
							resizeMode="contain"
							style={styles.carImage}
							source={require("../images/sample_incorrect_car.jpg")}
						/>
					</View>

					<Button onPress={pickCarPhoto} style={styles.upload}>
						<Text style={styles.uploadText} bold>
							Yuklash
						</Text>
						<PlusCircle />
					</Button>
				</>
			)}

			{carPhoto && (
				<Button style={styles.selectIdButton}>
					<Image
						source={{
							uri: carPhoto,
						}}
						style={styles.idPhoto}
					/>
					<Text semiBold>Mashinaning rasmi</Text>
					<Text
						onPress={pickCarPhoto}
						style={styles.idPhotoEditText}
						medium
					>
						O'zgartirish
					</Text>
				</Button>
			)}

			<Button style={styles.submitButton}>
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
	submitButton: {
		marginTop: "auto",
		backgroundColor: "#771E99",
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
		marginTop: 15,
	},
	idPhotoEditText: {
		letterSpacing: 0.5,
		color: "#771E99",
		marginLeft: "auto",
	},
	images: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
	},
	carImage: {
		width: "48%",
		height: height / 5.3,
	},
	upload: {
		borderColor: "#771E99",
		borderWidth: 2,
		marginTop: 20,
		flexDirection: "row",
	},
	uploadText: {
		color: "#771E99",
		marginRight: 2,
	},
});
