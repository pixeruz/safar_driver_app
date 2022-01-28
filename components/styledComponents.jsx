import React from "react";
import { Text as NativeTextComponent, StyleSheet, View } from "react-native";

export function Text({ ...props }) {
	return (
		<NativeTextComponent
			{...props}
			style={{
				...defaultStyles.defaultTextStyles,
				...props.style,
				fontFamily: props.bold
					? "Inter-Bold"
					: props.extraBold
					? "Inter-ExtraBold"
					: props.semiBold
					? "Inter-SemiBold"
					: props.medium
					? "Inter-Medium"
					: props.light
					? "Inter-Light"
					: props.thin
					? "Inter-Thin"
					: props.regular
					? "Inter-Regular"
					: props.black
					? "Inter-Black"
					: "Inter-Regular",
			}}
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
	defaultTextStyles: {},
	defaultContainerStyles: {
		flex: 1,
		padding: 10,
	},
});
