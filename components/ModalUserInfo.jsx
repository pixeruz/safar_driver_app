import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Pressable, View } from "react-native";
import { Text } from "./styledComponents";

export default function ModalUserInfo({ visibility, setVisibility }) {
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
						<View>
							<Text></Text>
						</View>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setVisibility(!visibility)}
						>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
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
		padding: 24,
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
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
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
});
