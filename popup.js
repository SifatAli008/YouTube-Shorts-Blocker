document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const statusText = document.getElementById("statusText");

    if (!toggleSwitch || !statusText) {
        console.error("Error: Elements not found in popup.html!");
        return;
    }

    // Get stored state from Chrome storage
    chrome.storage.sync.get({ enabled: true }, function (data) {
        let enabled = data.enabled;
        toggleSwitch.checked = enabled;
        updateStatusText(enabled);
    });

    // Toggle state on switch change
    toggleSwitch.addEventListener("change", function () {
        let newState = toggleSwitch.checked;
        chrome.storage.sync.set({ enabled: newState }, function () {
            updateStatusText(newState);

            // Notify content script to update Shorts blocking
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                if (tabs.length > 0) {
                    chrome.tabs.sendMessage(tabs[0].id, { enabled: newState });
                }
            });
        });
    });

    // Function to update status text
    function updateStatusText(enabled) {
        statusText.innerHTML = `Extension is <strong>${enabled ? "ON" : "OFF"}</strong>`;
    }
});
