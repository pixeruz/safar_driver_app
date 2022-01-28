import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Container, Input, Text } from "../components/styledComponents";
import Logo from "../images/Logo";

export default function SubmitIdScreen({ navigation }) {
	return (
		<Container>
			<Text medium style={styles.subtitle}>
				3/4
			</Text>
			<Text medium style={styles.title}>
				Haydovchilik guvohnomasini qo’shish
			</Text>

			<Button style={styles.selectIdButton}>
				<Image
					source={require("../images/noid.png")}
					style={styles.idPhoto}
				/>
				<Text semiBold>Guvohnoma old tomoni</Text>
				<Text style={styles.idPhotoEditText} medium>
					O'zgartirish
				</Text>
			</Button>

			<Button style={styles.selectIdButton}>
				<Image
					source={require("../images/noid.png")}
					style={styles.idPhoto}
				/>
				<Text semiBold>Guvohnoma orqa tomoni</Text>
				<Text style={styles.idPhotoEditText} medium>
					O'zgartirish
				</Text>
			</Button>

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
		marginTop: 5,
	},
	idPhotoEditText: {
		letterSpacing: 0.5,
		color: "#771E99",
		marginLeft: "auto",
	},
});
