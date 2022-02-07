const SERVER_URL = "https://safar.pixer.uz";

export default class CarsService {
	static async getCars(token) {
		let response = await fetch(SERVER_URL + "/api/cars", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});
		response = await response.json();
		return response;
	}
}
