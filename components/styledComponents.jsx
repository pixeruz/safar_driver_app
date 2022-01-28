import React from "react";
import { Text as NativeTextComponent, StyleSheet, View } from "react-native";

export function Text({ ...props }) {
	return (
		<NativeTextComponent
			{...props}
			style={{ ...defaultStyles.defaultTextStyles, ...props.style }}
		/>
	);
}

export function Container({ ...props }) {
	return (
		<View
			{...props}
			style={{ ...defaultStyles.defaultContainerStyles, ...props.style }}
		/>
	);
}

const defaultStyles = StyleSheet.create({
	defaultTextStyles: {
		fontFamily: "Inter-Regular",
	},
	defaultContainerStyles: {
		flex: 1,
		padding: 10,
	},
});
