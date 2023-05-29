




// TODO
// This code is intended to create a listing
// in the manageListings page.
// The code below is not useful.
// First - a listing has to be created
// Then - it has to be posted to the API
// And finally - it can be displayed in the html-file.

import * as url from "../../constants/api.js";

const createListingContainer = document.querySelector(".createListing");

async function createListing() {

    try {
        const response = await fetch(url);

        const newListing = await response.json();
        console.log(newListing);

    } catch {
        console.error(error);
    }
}
createListing();