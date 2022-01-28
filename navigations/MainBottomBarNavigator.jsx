import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import HomeIcon from "../images/HomeIcon";
import NotificationIcon from "../images/NotificationIcon";
import ProfileIcon from "../images/ProfileIcon";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

export default function MainBottomBarNavigator() {
	const { height } = Dimensions.get("screen");
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					paddingTop: 5,
					paddingBottom: 5,
					height: height / 12,
				},
				tabBarLabelStyle: {
					color: "#000000",
					fontSize: 13,
				},
			}}
		>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <HomeIcon active={focused} />;
					},
					title: "Asosiy",
				}}
			/>
			<Tab.Screen
				name="NotificationScreen"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <NotificationIcon active={focused} />;
					},
					title: "E'lonlar",
				}}
			/>
			<Tab.Screen
				name="ProfileScreen"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <ProfileIcon active={focused} />;
					},
					title: "Profil",
				}}
			/>
		</Tab.Navigator>
	);
}
