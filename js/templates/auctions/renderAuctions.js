export function renderAuctions(container, auctions) {
  container.innerHTML = "";
  const auctionItems = auctions.map(createAuction);
  console.log(auctionItems);

  container.append(...auctionItems);
}

function createAuction(auction) {
  const div = document.createElement("div");
  const heading = document.createElement("h4");
  heading.textContent = auction.title;
  div.append(heading);
  return div;
}
