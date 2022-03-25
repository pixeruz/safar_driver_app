import React from "react";
import { Image, StyleSheet, View } from "react-native";
import UsersService from "../api/UsersAPI";
import { useOptions } from "../contexts/OptionsContext";
import { Text } from "./styledComponents";

export default function MainHeaderUserProfile() {
	const [options, setOptions] = useOptions();
	const [photo, setPhoto] = React.useState();
	const loadUser = async () => {
		try {
			let user = await UsersService.getProfile(options?.token);
			if (user?.data?.user?.user_name) {
				setOptions({
					...options,
					name: user?.data?.user?.user_name,
					image:
						user?.data?.car?.car_images_albums[0].car_image
							?.photo_id +
						"." +
						user?.data?.car?.car_images_albums[0].car_image?.type,
					confirmed: user?.data?.driver?.is_confirmed,
				});
			}
		} catch (error) {}
	};

	React.useEffect(() => {
		loadUser();
		return () => {};
	}, []);
	return (
		<View style={styles.container}>
			<Image
				source={
					options?.image
						? {
								uri:
									"https://safar.pixer.uz/api/cars/uploads/" +
									options?.image,
						  }
						: require("../images/nophoto.png")
				}
				width={64}
				height={64}
				style={styles.profileImage}
			/>
			<View style={styles.profileText}>
				<Text style={styles.greeting} semiBold>
					Xayrli kun,
				</Text>
				<Text style={styles.name} bold>
					{options?.name || "Hurmatli haydovchi"}
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
