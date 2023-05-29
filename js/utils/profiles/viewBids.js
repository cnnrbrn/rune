

// TODO
// This kode is intended to view all the bids
// in the  Listings page.

import * as url from "../../constants/api.js";

const listingsContainer = document.querySelector("#viewListings");

async function viewBids() {

    try {
        const response = await fetch(url);

        const bids = await response.json();
        console.log(bids);

    } catch {
        console.error(error);
    }
}
viewBids();