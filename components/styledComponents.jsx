import React from "react";
import { Text as NativeTextComponent, StyleSheet } from "react-native";

export function Text({ ...props }) {
	return (
		<NativeTextComponent
			{...props}
			style={{ ...defaultStyles.defaultTextStyles, ...props.style }}
		/>
	);
}

const defaultStyles = StyleSheet.create({
	defaultTextStyles: {},
});
