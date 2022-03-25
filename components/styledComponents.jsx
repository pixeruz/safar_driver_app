import React from "react";
import {
	Text as NativeTextComponent,
	StyleSheet,
	View,
	Pressable,
	TextInput,
	ScrollView,
} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

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

export function Container({ scroll, ...props }) {
	if (scroll) {
		return (
			<ScrollView
				{...props}
				containerStyle={{
					...defaultStyles.defaultContainerStyles,
					...props.containerStyle,
				}}
				style={{
					...props.style,
					padding: 16,
				}}
			/>
		);
	}

	return (
		<View
			{...props}
			style={{ ...defaultStyles.defaultContainerStyles, ...props.style }}
		/>
	);
}

export function Button({ ...props }) {
	const netInfo = useNetInfo();

	!netInfo.isConnected ? (props.disabled = true) : props.disabled;
	console.log(props);

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

export function Input({ ...props }) {
	return (
		<TextInput
			placeholderTextColor={props.placeholderTextColor || "#222222"}
			{...props}
			ref={props?.innerRef && props.innerRef}
			style={{
				...defaultStyles.defaultInputStyles,
				...props.style,
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
	defaultInputStyles: {
		padding: 14,
		borderColor: "#DFE4E9",
		borderWidth: 1,
		borderRadius: 6,
		marginVertical: 6,
	},
});

export { defaultStyles };
