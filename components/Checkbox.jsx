import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Checkbox({ checked, setChecked, focus, ...props }) {
	function onCheckmarkPress() {
		setChecked(!checked);
	}

	React.useEffect(() => {
		if (checked) {
			focus()();
		}
	}, [checked]);

	return (
		<Pressable
			style={[
				styles.checkboxBase,
				checked && styles.checkboxChecked,
				props.style || {},
			]}
			onPress={onCheckmarkPress}
		>
			{checked && <Ionicons name="checkmark" size={20} color="white" />}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	checkboxBase: {
		width: 30,
		height: 30,

		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "#771E99",
		backgroundColor: "transparent",
	},

	checkboxChecked: {
		backgroundColor: "#771E99",
	},
});

export default Checkbox;
