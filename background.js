chrome.runtime.onInstalled.addListener(() => {
    console.log("Shorts Blocker Installed!");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.enabled !== undefined) {
        chrome.storage.sync.set({ enabled: request.enabled });
        sendResponse({ success: true });
    }
});
