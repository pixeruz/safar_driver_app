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
}
