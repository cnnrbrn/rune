import { BASE_URL } from "../../constants/api.js";

export async function register(name, email, password) {
	const response = await fetch(`${BASE_URL}auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name, email, password }),
	});

	console.log("response", response);

	if (response.ok === true) {
		return await response.json();
	}

	const error = await response.json();
	console.log(error);

	throw new Error(error.errors[0].message);
}
