const SERVER_URL = "https://safar.pixer.uz";

export default class AuthService {
	static async checkUserPhone(phone) {
		let response = await fetch(SERVER_URL + "/api/users/check-phone", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone: phone,
			}),
		});
		response = await response.json();
		return response;
	}

	static async createUserPhone(phone, name) {
		let response = await fetch(SERVER_URL + "/api/users/account", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone,
				name,
			}),
		});
		response = await response.json();
		return response;
	}

	static async loginService(phone) {
		let response = await fetch(SERVER_URL + "/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone: phone,
			}),
		});
		response = await response.json();
		return response;
	}

	static async checkCode(code, code_id) {
		console.log(code_id, code);

		let response = await fetch(SERVER_URL + "/api/users/code", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"code-validation-id": code_id,
			},
			body: JSON.stringify({
				code,
				user_device: "other",
			}),
		});
		response = await response.json();
		return response;
	}

	static async sendApplyToRegistration(
		carBrandId,
		carColor,
		carNumber,
		licencePhoto,
		carPhoto,
		token
	) {
		let carPhotoLocalUri = carPhoto;
		let carPhotoFilename = carPhotoLocalUri.split("/").pop();

		// Infer the type of the image
		let carPhotoMatch = /\.(\w+)$/.exec(carPhotoFilename);
		let carPhotoType = carPhotoMatch
			? `image/${carPhotoMatch[1]}`
			: `image`;

		let licencePhotoLocalUri = licencePhoto;
		let licencePhotoFilename = licencePhotoLocalUri.split("/").pop();

		// Infer the type of the image
		let licencePhotoMatch = /\.(\w+)$/.exec(licencePhotoFilename);
		let licencePhotoType = licencePhotoMatch
			? `image/${licencePhotoMatch[1]}`
			: `image`;

		let formdata = new FormData();

		formdata.append("car_photo", {
			uri: carPhotoLocalUri,
			name: licencePhotoFilename,
			type: carPhotoType,
		});
		formdata.append("license_photo", {
			uri: licencePhotoLocalUri,
			name: licencePhotoFilename,
			type: licencePhotoType,
		});

		formdata.append("car", carBrandId);
		formdata.append("car_color", carColor);
		formdata.append("car_number", `20A222AA`);
		console.log("Request start");
		let res = await fetch(SERVER_URL + "/api/users/become-driver", {
			method: "POST",
			headers: {
				Authorization: token,
			},
			body: formdata,
		});
		console.log("Request end");

		res = await res.json();
		return res;
	}
}
