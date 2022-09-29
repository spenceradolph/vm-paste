// This script runs on the Ginko page after clicking 'send'
// It reads from localStorage, and loops through the characters in chunks
// For each chunk, put into the text field and click 'Post Text to VM' button
// Can adjust delays, and size of chunk

// Setup Constants
const postTextToVmTextfieldId = "pasteTextInput"; // set by ginko
const postTextToVmButtonId = "pasteTextButton"; // set by ginko

const sizeToPaste = 400;
const firstDelay = 800; // ms
const secondDelay = 1300; // ms

// Setup Paste Function
const pasteAndSend = async ({ textToPaste }) => {
  console.log(`DataReadToLocalStorage: ${textToPaste}`);

  for (let index = 0; index < textToPaste.length; index += sizeToPaste) {
    const charChunk = textToPaste.slice(index, sizeToPaste + index);

    document.getElementById(postTextToVmTextfieldId).value = charChunk;
    await new Promise((resolve) => setTimeout(resolve, firstDelay)); // first delay

    document.getElementById(postTextToVmButtonId).click();
    await new Promise((resolve) => setTimeout(resolve, secondDelay)); // second delay
  }
};

// Read Data and Execute
chrome.storage.local.get(["textToPaste"], async (data) => {
  await pasteAndSend(data);
});
