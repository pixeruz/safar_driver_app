import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "./styledComponents";

export default function MainHeaderUserProfile() {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: "https://picsum.photos/400" }}
				width={64}
				height={64}
				style={styles.profileImage}
			/>
			<View style={styles.profileText}>
				<Text style={styles.greeting} semiBold>
					Xayrli kun,
				</Text>
				<Text style={styles.name} bold>
					Muhammadyunus Yusupov
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	profileImage: {
		width: 64,
		height: 64,
		borderRadius: 50,
		borderWidth: 4,
		borderColor: "#771E99",
	},
	profileText: {
		marginLeft: 10,
	},
	name: {
		fontSize: 16,
	},
	greeting: {
		fontSize: 12,
		color: "#73787D",
	},
});
