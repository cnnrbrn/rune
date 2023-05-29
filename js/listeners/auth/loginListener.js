// import * as auth from "../../listeners/auth/index";
// import * as auth from "../../constants/api.js";
// import * as storage from "../../storage/storage.js";
// import displayMessage from "../../constants/displayMessage.js";

// export function loginListener() {
// 	const form = document.querySelector("#loginForm");
// 	console.log("asdasdasd");

// 	// disable form while api call is in progress
// 	// some kind of spinner or indicator that the form is being submitted

// 	if (form) {
// 		form.addEventListener("submit", handleLogin);
// 	}
// }

// export async function handleLogin(event) {
// 	event.preventDefault();
// 	console.log(event);
// 	const form = event.target;
// 	const data = new FormData(form);
// 	const email = data.get("email");
// 	const password = data.get("password");

// 	const button = form.querySelector("button");
// 	button.innerText = "Logging in...";

// 	try {
// 		const response = await auth.login(email, password);
// 		console.log(response);
// 		storage.save("token", response.accessToken);
// 		storage.save("user", { name: response.name, email: response.email });

// 		displayMessage("success", "Login successful.", "#message");
// 		form.reset();

// 		// The redirectin just below has been commented off, otherwise you won't get the message that comes to #message.

// 		// location.href = "//userLoggedIn.html";
// 	} catch (error) {
// 		displayMessage("error", error, "#message");
// 	} finally {
// 		button.innerText = "Login";
// 		fieldset.disabled = false;
// 	}
// }
