import { register } from "../../api/auth/register.js";
import displayMessage from "../../ui/common/displayMessage.js";

export function registerListener() {
	const form = document.querySelector("#registerForm");

	// disable form while api call is in progress
	// some kind of spinner or indicator that the form is being submitted

	if (form) {
		form.addEventListener("submit", handleRegister);
	}
}

async function handleRegister(event) {
	event.preventDefault();

	const form = event.target;
	const data = new FormData(form);
	const name = data.get("name");
	const email = data.get("email");
	const password = data.get("password");

	form.querySelector("fieldset").disabled = true;

	try {
		const response = await register(name, email, password);
		console.log("response", response);
		displayMessage("success", "Registration successful. Please login.", "#message");
		form.reset();
		// None of the different api we are dealing with here send back a token
		// storage.save("token", response.accessToken);
		// storage.save("user", { name: response.name, email: response.email });

		// Do not direct to login.html. Because then the user will not be informed about the result of the registration process.
		// location.href = ".//login.html";
	} catch (error) {
		console.log(error);

		// This error message will eventually end up in the "register.html"
		displayMessage("error", error, "#message");
	} finally {
		form.querySelector("fieldset").disabled = false;
	}
}
