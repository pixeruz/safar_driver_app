const SERVER_URL = "https://safar.pixer.uz";
// const SERVER_URL = "http://localhost:5771";

export default class RegionsService {
	static async getCities(token) {
		let response = await fetch(SERVER_URL + "/api/regions/cities", {
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
