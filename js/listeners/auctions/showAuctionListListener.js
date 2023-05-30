import displayAuctions from "../../ui/auctions/displayAuctions.js";

export function showAuctionListListener() {
  window.addEventListener("DOMContentLoaded", () => {
    displayAuctions();
  });
}
