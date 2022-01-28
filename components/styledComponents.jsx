import React from "react";
import {
	Text as NativeTextComponent,
	StyleSheet,
	View,
	Pressable,
} from "react-native";

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
				color: props.light ? "#fff" : props?.style?.color || "#000",
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

export function Button({ ...props }) {
	return (
		<Pressable
			{...props}
			style={{
				...defaultStyles.defaultButtonStyles,
				...props.style,
				backgroundColor: props.disabled
					? "#D3D3D3"
					: props?.style?.backgroundColor,
			}}
		/>
	);
}

const defaultStyles = StyleSheet.create({
	defaultTextStyles: {},
	defaultContainerStyles: {
		flex: 1,
		padding: 16,
	},
	defaultButtonStyles: {
		padding: 16,
		borderRadius: 6,
		marginVertical: 5,
		justifyContent: "center",
		alignItems: "center",
	},
});
