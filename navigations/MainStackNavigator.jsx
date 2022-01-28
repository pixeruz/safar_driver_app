import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboardingscreen from "../screens/OnBoardingScreen";
import LoginScreen from "../screens/LoginScreen";

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
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
