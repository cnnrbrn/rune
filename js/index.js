import * as listeners from "./listeners/index.js";

/* The code just below make the hamburger menu work properly */
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
});

const pathname = window.location.pathname;
console.log("pathname:", pathname);

switch (pathname) {
	case "/":
	case "/index.html":
		console.log("home page");
		break;
	case "/login.html":
		console.log("login page");
		listeners.loginListener();
		break;
	case "/register.html":
		listeners.registerListener();
		console.log("register page");
		break;
}
