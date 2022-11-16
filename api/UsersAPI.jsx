const SERVER_URL = "https://safar.pixer.uz";
// const SERVER_URL = "http://localhost:5771";

export default class UsersService {
	static async getProfile(token) {
		try {
			let response = await fetch(SERVER_URL + `/api/users/profile`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			});

			response = await response.json();
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	static async getNotifications(token) {
		try {
			let response = await fetch(SERVER_URL + `/api/notifications`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			});

			response = await response.json();
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	static async setToken(token, pushToken) {
		try {
			let response = await fetch(SERVER_URL + `/api/users/set-token`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
				body: JSON.stringify({
					token: pushToken,
				}),
			});

			response = await response.json();
			return response;
		} catch (error) {
			console.log(error);
		}
	}
}
