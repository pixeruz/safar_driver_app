import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboardingscreen from "../screens/OnBoardingScreen";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import MainStackNavigatorHeader from "../components/MainStackNavigatorHeader";
import CustomRegistrationNavigator from "./CustomRegistrationNavigator";
import WaitStatusScreen from "../screens/WaitStatusScreen";
import MainBottomBarNavigator from "./MainBottomBarNavigator";
import TripDetailScreen from "../screens/TripDetailScreen";
import CustomAddTripNavigator from "./CustomAddTripNavigator";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				contentStyle: {
					backgroundColor: "#fff",
				},
				animation: "slide_from_right",
				gestureEnabled: true,
				gestureDirection: "horizontal",
			}}
			initialRouteName="TabBarNavigator"
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
			<Stack.Screen
				name="AddTripScreen"
				options={{
					headerShown: true,
					header: MainStackNavigatorHeader,
					title: "Yangi yo'nalish yaratish",
				}}
				component={CustomAddTripNavigator}
			/>
			<Stack.Screen
				name="WaitStatusScreen"
				options={{
					headerShown: false,
				}}
				component={WaitStatusScreen}
			/>
			<Stack.Screen
				name="TabBarNavigator"
				options={{
					headerShown: false,
				}}
				component={MainBottomBarNavigator}
			/>
			<Stack.Screen
				name="TripDetailScreen"
				options={{
					headerShown: false,
				}}
				component={TripDetailScreen}
			/>
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
