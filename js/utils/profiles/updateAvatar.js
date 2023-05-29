

// TODO
// This kode is intended to view all my avatars
// in the  Profile page.

import * as url from "../../constants/api.js";

const updateAvatarContainer = document.querySelector(".updateAvatar");

async function updateAvatar() {

    try {
        const response = await fetch(url);

        const thisAvatar = await response.json();
        console.log(thisAvatar);

    } catch {
        console.error(error);
    }
}
updateAvatar();