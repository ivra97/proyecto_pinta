import { loadFeedView } from "./controller/FeedController.js";

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("feed.html")) {
        loadFeedView();
    }
});