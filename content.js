// Helper function to remove elements based on selectors
function removeElements(selectors) {
  selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
          element.remove(); // Completely remove Shorts instead of hiding
      });
  });
}

// Define CSS selectors for YouTube Shorts (Home, Sidebar, Search, Filter Tab)
const selectorsToRemove = [
  "ytd-rich-section-renderer.ytd-rich-grid-renderer", // Shorts main section (Home)
  "ytd-rich-shelf-renderer[is-shorts]",               // Shorts Shelf (Home)
  "ytd-reel-shelf-renderer",                          // Shorts Sidebar
  "ytd-reel-video-renderer",                          // Individual Shorts in Sidebar
  "ytd-grid-video-renderer:has(a[href*='/shorts/'])", // Shorts in Search Results
  "ytd-video-renderer:has(a[href*='/shorts/'])",      // Shorts in Search Results
  "#chips ytd-feed-filter-chip-bar-renderer",         // Shorts Filter Tab (Search page)
  "#chip-container",                                  // YouTube Shorts Filter Tab
  "yt-chip-cloud-chip-renderer:has([title='Shorts'])" // Removes the "Shorts" chip
];

// Function to enable/disable Shorts dynamically
function toggleShorts(enabled) {
  if (enabled) {
      removeElements(selectorsToRemove);
  } else {
      location.reload(); // Reload page to restore Shorts
  }
}

// Run once when the page loads and apply user settings
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get({ enabled: true }, function (data) {
      toggleShorts(data.enabled);
  });
});

// Listen for messages from the popup (toggle event)
chrome.runtime.onMessage.addListener(function (request) {
  if (request.enabled !== undefined) {
      chrome.storage.sync.set({ enabled: request.enabled }, () => {
          toggleShorts(request.enabled);
      });
  }
});

// Observe dynamic page changes (YouTube infinite scrolling, sidebar updates, search results)
const observer = new MutationObserver(() => {
  chrome.storage.sync.get({ enabled: true }, function (data) {
      if (data.enabled) removeElements(selectorsToRemove);
  });
});
observer.observe(document.body, { childList: true, subtree: true });

// Observe dynamic page changes (YouTube infinite scrolling, sidebar updates, search results)
const observer2 = new MutationObserver(() => {
  chrome.storage.sync.get({ enabled: true }, function (data) {
      if (data.enabled) removeElements(selectorsToRemove);    
    });
});
observer2.observe(document.body, { childList: true, subtree: true });