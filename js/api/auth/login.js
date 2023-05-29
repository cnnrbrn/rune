import { BASE_URL } from "../../constants/api.js";





// Thjs is one way to write the function login
// ###########################################
export async function login(email, password) {
	const response = await fetch(`${BASE_URL}auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	if (response.ok) {
		return await response.json();
	}
	const error = await response.json();

	throw new Error(error.errors[0].message);
}

// This is an alternative way to write the function login
// ###########################################
// export async function login(data) {
// 	const url = `${BASE_URL}auth/login`;

// 	const options = {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 		headers: {
// 			"content-type": "application/json; charset=UTF-8",
// 		},
// 	};
// 	const response = await fetch(url, options);

// 	if (!response.ok) {
// 		throw new Error("Either the username or password is incorrect");
// 	}
// 	return await response.json();
// }







