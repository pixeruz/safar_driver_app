import React from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import RegistrationOTPScreen from "../screens/RegistrationOTPScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

export default function CustomRegistrationNavigator({ navigation }) {
	const ViewPagerRef = React.useRef();

	return (
		<View style={styles.container}>
			<PagerView
				scrollEnabled={false}
				ref={ViewPagerRef}
				style={styles.container}
				initialPage={0}
			>
				<RegistrationScreen
					pager={ViewPagerRef.current}
					navigation={navigation}
					key="1"
				/>
				<RegistrationOTPScreen
					pager={ViewPagerRef.current}
					navigation={navigation}
					key="2"
				/>
			</PagerView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
