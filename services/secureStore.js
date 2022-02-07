import * as SecureStore from "expo-secure-store";

export async function saveToSecureStorage(key, value) {
	await SecureStore.setItemAsync(key, value);
}

export async function getValueForFromSecureStore(key) {
	let result = await SecureStore.getItemAsync(key);
	return result;
}

export async function removeValueFromSecureStore(key) {
	await SecureStore.deleteItemAsync(key);
}
