import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboardingscreen from "../screens/OnBoardingScreen";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import MainStackNavigatorHeader from "../components/MainStackNavigatorHeader";
import CustomRegistrationNavigator from "./CustomRegistrationNavigator";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
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
			<Stack.Screen
				name="RegistrationScreen"
				options={{
					headerShown: true,
					header: MainStackNavigatorHeader,
					title: "Ro'yxatdan o'tish",
				}}
				component={CustomRegistrationNavigator}
			/>
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
