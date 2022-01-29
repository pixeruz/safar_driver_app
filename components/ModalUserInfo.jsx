import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Pressable, View, Image } from "react-native";
import CloseIcon from "../images/Close";
import { Button, Text } from "./styledComponents";
import * as Linking from "expo-linking";

export default function ModalUserInfo({ visibility, setVisibility }) {
	const _OpenPhone = () => {
		if (Linking.canOpenURL("tel:+99897378899")) {
			Linking.openURL("tel:+99897378899");
		}
	};

	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="fade"
				transparent={true}
				visible={visibility}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setVisibility(!visibility);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.buttonView}>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setVisibility(!visibility)}
							>
								<CloseIcon />
							</Pressable>
						</View>
						<View style={styles.wrapper}>
							<Image
								source={{
									uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
								}}
								width={56}
								height={56}
								style={styles.avatar}
							/>
							<Text style={styles.name} medium>
								Timur Kayumov
							</Text>
							<Text style={styles.subtitle}>Haydovchi oldi</Text>
							<Text medium style={styles.phone}>
								+998 93 529 49 52
							</Text>
							<Button
								onPress={_OpenPhone}
								style={styles.callButton}
							>
								<Text style={styles.callButtonText} bold>
									Qo'ng'iroq qilish
								</Text>
							</Button>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop: 22,
		backgroundColor: "#22222277",
	},
	modalView: {
		backgroundColor: "white",
		borderTopEndRadius: 5,
		borderTopStartRadius: 5,
		width: "100%",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},

	buttonOpen: {
		backgroundColor: "#F194FF",
	},

	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	buttonView: {
		// paddingVertical: 20,
		width: "100%",
		alignItems: "flex-end",
	},
	button: {
		padding: 20,
		marginHorizontal: 10,
	},
	avatar: {
		width: 72,
		height: 72,
		borderRadius: 50,
	},
	name: {
		marginTop: 24,
		fontSize: 24,
	},
	wrapper: {
		width: "100%",
		paddingHorizontal: 24,
		alignItems: "center",
	},
	subtitle: {
		color: "#222222",
		marginTop: 4,
	},
	phone: {
		fontSize: 20,
		marginTop: 24,
		color: "#222222",
	},
	callButtonText: {
		fontSize: 18,
		color: "#fff",
	},
	callButton: {
		width: "100%",
		padding: 16,
		backgroundColor: "#771E99",
		marginVertical: 24,
		marginBottom: 35,
	},
});
