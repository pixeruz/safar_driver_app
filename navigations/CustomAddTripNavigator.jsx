import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import RegistrationOTPScreen from "../screens/RegistrationOTPScreen";
import SubmitIdScreen from "../screens/SubmitIdScreen";
import SubmitPhotoScreen from "../screens/SubmitPhotoScreen";
import AddTripProperties from "../screens/AddTripProperties";

const Stack = createNativeStackNavigator();

function CustomAddTripNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				contentStyle: {
					backgroundColor: "#fff",
				},
				animation: "slide_from_right",
			}}
		>
			<Stack.Screen
				name="AddTripProperties"
				options={{
					headerShown: false,
				}}
				component={AddTripProperties}
			/>
		</Stack.Navigator>
	);
}

export default CustomAddTripNavigator;
