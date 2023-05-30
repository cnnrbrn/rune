import * as listeners from "./listeners/index.js";

export default function router() {
  const pathname = window.location.pathname;
  console.log("pathname:", pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      listeners.showAuctionListListener();
      break;
  }
}
