function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function arrayBufferToString(arrayBuffer, decoderType = "utf-8") {
  let decoder = new TextDecoder(decoderType);
  return decoder.decode(arrayBuffer);
}

async function pasteTheThing() {
  var updateTextTo = document.getElementById("btsend").value;
  console.log(updateTextTo);
  chrome.storage.local.set({ updateTextTo }, function () {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content_script3.js"],
      });
    });
  });
}

document
  .getElementById("clickactivity")
  .addEventListener("click", pasteTheThing);
