const SERVER_URL = "https://safar.pixer.uz";

export default class TripService {
	static async getTrips(token) {
		let response = await fetch(SERVER_URL + "/api/trips/my-active", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});
		response = await response.json();
		return response;
	}

	static async createTrip(
		token,
		leave_region_id,
		come_region_id,
		seats,
		trip_time,
		smoke,
		air,
		baggage
	) {
		try {
			let body = JSON.stringify({
				leave_region_id,
				come_region_id,
				seats,
				trip_time,
				is_smoking: smoke,
				is_luggage: baggage,
				is_conditioner: air,
				oil_type: "GAZ",
				comments: "Nothing is important",
			});

			let response = await fetch(SERVER_URL + "/api/trips/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
				body,
			});

			response = await response.json();
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	static async editTripStatus(token, trip_id, trip_status) {
		try {
			let response = await fetch(
				SERVER_URL + `/api/trips/${trip_id}/edit?status=${trip_status}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			response = await response.json();
			return response;
		} catch (error) {
			console.log(error);
		}
	}
}
