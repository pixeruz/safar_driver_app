import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataToAsyncStorage = async (key, value) => {
	try {
		return await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log("ErrorAsync", e);
	}
};

export const getDataFromAsyncStorage = async (data) => {
	try {
		const value = await AsyncStorage.getItem(data);
		return value;
	} catch (e) {
		// error reading value
	}
};
