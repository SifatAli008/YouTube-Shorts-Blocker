# 🚫 YouTube Shorts Blocker

A lightweight Chrome extension that **removes YouTube Shorts** from the homepage and sidebar, and search.  
✅ **Toggle ON/OFF easily**  
✅ **Blocks Shorts dynamically**  
✅ **Prevents distractions**

---

## 📌 Features

- **Removes Shorts** from YouTube's **Home, Sidebar, and Search Results**
- **Toggle ON/OFF** using a simple switch
- **Automatically blocks Shorts on page load**
- **Minimal & lightweight Chrome extension**

---

## 🛠️ Installation (Manual)

1. **Download or Clone** this repository.
2. Open `chrome://extensions/` in your browser.
3. Enable **Developer Mode** (top-right corner).
4. Click **"Load unpacked"**.
5. Select the downloaded folder **(YouTube Shorts Blocker)**.
6. Done! 🎉 The extension is now active.

---

## ⚙️ How to Use

1. Click the **Extensions** icon 🔧 (top-right in Chrome).
2. Click **"YouTube Shorts Blocker"**.
3. Toggle the switch to **Enable/Disable Shorts blocking**.

---

## 🖥️ Tech Stack

- **JavaScript** – Content & background scripts
- **HTML/CSS** – Popup UI
- **Chrome Extensions API** – Storage & messaging

---

## 📂 File Structure

```plaintext
YouTube-Shorts-Blocker
├── icons/              # Extension icons
├── manifest.json       # Chrome Extension manifest
├── popup.html          # Extension popup UI
├── popup.js            # Handles toggle functionality
├── popup.css           # Styles for popup UI
├── content.js          # Blocks Shorts dynamically
├── background.js       # Listens for changes
└── README.md           # Project documentation
