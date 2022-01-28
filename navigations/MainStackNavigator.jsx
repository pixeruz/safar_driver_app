import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboardingscreen from "../screens/OnBoardingScreen";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				contentStyle: {
					backgroundColor: "#fff",
				},
			}}
		>
			<Stack.Screen
				name="OnBoardingScreen"
				options={{
					headerShown: false,
				}}
				component={Onboardingscreen}
			/>
			<Stack.Screen
				name="LoginScreen"
				options={{
					headerShown: false,
				}}
				component={LoginScreen}
			/>
			<Stack.Screen
				name="OTPScreen"
				options={{
					headerShown: false,
				}}
				component={OTPScreen}
			/>
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
