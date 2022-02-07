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
import CitiesScreen from "../screens/CitiesScreen";
import SuccessfullyCreated from "../screens/SuccessfullyCreated";
import { useOptions } from "../contexts/OptionsContext";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
	const [options] = useOptions();

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
			initialRouteName={
				options?.token && options?.driver
					? "TabBarNavigator"
					: options?.token &&
					  (!options?.driver || options?.token !== "confirmed")
					? "RegistrationScreen"
					: "LoginScreen"
			}
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
				name="CitiesScreen"
				options={{
					headerShown: true,
					header: MainStackNavigatorHeader,
					title: "Shahar tanlash",
				}}
				component={CitiesScreen}
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
			<Stack.Screen
				name="SuccessfullyCreated"
				options={{
					headerShown: false,
				}}
				component={SuccessfullyCreated}
			/>
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
