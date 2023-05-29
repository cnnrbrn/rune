

// TODO
// This kode is intended to get all the listings
// into the Listings page.

import * as url from "../../constants/api.js";

const listingsContainer = document.querySelector("#viewListings");

async function viewListings() {

    try {
        const response = await fetch(url);

        const listings = await response.json();
        console.log(listings);

    } catch {
        console.error(error);
    }
}
viewListings();