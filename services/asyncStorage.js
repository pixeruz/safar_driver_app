import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataToAsyncStorage = async (value) => {
	try {
		await AsyncStorage.setItem("@storage_Key", value);
	} catch (e) {
		console.log("ErrorAsync", e);
	}
};

export const getDataFromAsyncStorage = async () => {
	try {
		const value = await AsyncStorage.getItem("@storage_Key");
		return value;
	} catch (e) {
		// error reading value
	}
};
