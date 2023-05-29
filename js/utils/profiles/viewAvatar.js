

// TODO
// This kode is intended to view all my avatars
// in the  Profile page.

import * as url from "../../constants/api.js";

const listingsContainer = document.querySelector(".viewAvatars");

async function viewMyAvatars() {

    try {
        const response = await fetch(url);

        const avatars = await response.json();
        console.log(avatars);

    } catch {
        console.error(error);
    }
}
viewMyAvatars();