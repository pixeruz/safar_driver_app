import { useNavigation } from "@react-navigation/native";
import { useOptions } from "../contexts/OptionsContext";

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
			if (response && !response?.ok && response.code == 403)
				this.logout();

			return response;
		} catch (error) {
			console.log(error);
		}
	}

	static async submitTripRequest(token, seat_id, status, tripper) {
		try {
			let response = await fetch(
				// localhost:5771/api/trips/accept/:seat_id

				SERVER_URL + `/api/trips/accept/${seat_id}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
					body: JSON.stringify({
						status,
						tripper,
					}),
				}
			);

			console.log(response);

			// response = await response.json();
			// if (response && !response?.ok && response.code == 403)
			// 	this.logout();

			// return response;
		} catch (error) {
			console.log(error);
		}
	}

	static async getRequests(token) {
		let response = await fetch(SERVER_URL + "/api/trips/requests", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});

		response = await response.json();
		if (response && !response?.ok && response.code == 403) this.logout();

		return response;
	}
}
