import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataToAsyncStorage = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
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
