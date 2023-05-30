import { getAuctions } from "../../api/auctions/index.js";
import { renderAuctions } from "../../templates/index.js";
import { displayMessage } from "../common/displayMessage.js";

export default async function displayAuctions() {
  const container = document.querySelector("#auctionContainer");

  try {
    const auctions = await getAuctions();

    renderAuctions(container, auctions);
  } catch (error) {
    displayMessage("danger", error, container);
  }
}
