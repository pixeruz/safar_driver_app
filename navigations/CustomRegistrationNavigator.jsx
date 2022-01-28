import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import RegistrationOTPScreen from "../screens/RegistrationOTPScreen";
import SubmitIdScreen from "../screens/SubmitIdScreen";
import SubmitPhotoScreen from "../screens/SubmitPhotoScreen";

const Stack = createNativeStackNavigator();

function RegistrationNavigator() {
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
				name="RegistrationSecondScreen"
				options={{
					headerShown: false,
				}}
				component={RegistrationScreen}
			/>
			<Stack.Screen
				name="RegistrationOTPScreen"
				options={{
					headerShown: false,
				}}
				component={RegistrationOTPScreen}
			/>
			<Stack.Screen
				name="SubmitIdScreen"
				options={{
					headerShown: false,
				}}
				component={SubmitIdScreen}
			/>
			<Stack.Screen
				name="SubmitPhotoScreen"
				options={{
					headerShown: false,
				}}
				component={SubmitPhotoScreen}
			/>
		</Stack.Navigator>
	);
}

export default RegistrationNavigator;
