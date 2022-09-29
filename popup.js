// This Script runs in the extension popup
// In order to transfer data between the popup and the page
// Data is sent to localStorage, since both sides have access

const pasteTheThing = async () => {
  var updateTextTo = document.getElementById("btsend").value;

  console.log(`DataSentToLocalStorage: ${updateTextTo}`);

  // Store Data
  chrome.storage.local.set({ updateTextTo }, () => {
    // Get Window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Run content_script
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content_script.js"],
      });
    });
  });
};

document
  .getElementById("clickactivity")
  .addEventListener("click", pasteTheThing);
