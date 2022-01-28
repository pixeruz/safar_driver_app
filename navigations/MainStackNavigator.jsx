import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboardingscreen from "../screens/OnBoardingScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="OnBoarding"
				options={{
					headerShown: false,
				}}
				component={Onboardingscreen}
			/>
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
