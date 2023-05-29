import * as storage from "./storage.js";

export function isLoggedIn() {
	const token = storage.get("token");
	return token ? true : false;
}
