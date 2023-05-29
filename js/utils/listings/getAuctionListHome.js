

import { BASE_URL } from "../../constants/api.js";


export async function getAuctions() {
    const url = `${BASE_URL}listings`;
    const response = await fetch(url);

    if (response.ok) {
        console.log(response);
        return await response.json();
    }

    throw new Error("There was an error fetching the auctions");
}

export async function auctionList() {
        const container = "#auctionContainer";

        try {
            const auctions = await getAuctions();
            renderAuctions(posts, container);
        } catch (error) {
            displayMessage("danger", error, container);
        }
};

export function renderAuctions(auctions, container) {
    const parent = document.querySelector(container);
    const postHtml = auctions.map((auction) => createAuction(auction));
    parent.append(...postHtml);
}

export function createAuction({ title, body }) {
    const div = document.createElement("div");
    div.classList.add("post");
    const heading = document.createElement("h4");
    heading.textContent = title;
    const content = document.createElement("p");
    content.textContent = body;
    div.append(heading, content);
    return div;
}



document.getElementById("clickMe").onclick = auctionList;
