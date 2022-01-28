import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";
import PlusCircle from "../images/PlusCircle";

const { width, height } = Dimensions.get("screen");

export default function SubmitPhotoScreen({ navigation }) {
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

			<Button style={styles.upload}>
				<Text style={styles.uploadText} bold>
					Yuklash
				</Text>
				<PlusCircle />
			</Button>

			{/* <Button style={styles.selectIdButton}>
				<Image
					source={require("../images/noid.png")}
					style={styles.idPhoto}
				/>
				<Text semiBold>Guvohnoma orqa tomoni</Text>
				<Text style={styles.idPhotoEditText} medium>
					O'zgartirish
				</Text>
			</Button> */}

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
