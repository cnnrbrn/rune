

// TODO
// This kode is intended to get all the listings
// into the Home page.

import * as url from "../../constants/api.js";



const listingsContainer = document.querySelector(".allListings");
console.log(window);
async function getListings() {

    try {
        const response = await fetch(url);

        const listings = await response.json();
        console.log(listings);

    } catch {
        console.error(error);
    }
}
getListings();