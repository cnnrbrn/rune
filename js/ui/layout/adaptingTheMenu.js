import { isLoggedIn } from "../../helpers/auth/isLoggedIn.js";


// TODO
// How can the pseudocode below be implemented in JavaScript?
export function adaptingTheMenu() {
    if (isLoggedIn()) {
        // 1. Login-buttons shall not appear in the top menu or in the hamburger menu
        // 2. The menu-text "Login" shall not appear in the footer menu
        // 3. Logout-buttons shall appear in the top menu and in the hamburger menu
        // 4. The menu-text "Logout" shall appear in the footer menu


    } else {
        // 1. Login-buttons shall appear in the top menu and in the hamburger menu
        // 2. The menu-text "Login" shall appear in the footer menu
        // 3. Logout-buttons shall not appear in the top menu or in the hamburger menu
        // 4. The menu-text "Logout" shall not appear in the footer menu

	}
}
