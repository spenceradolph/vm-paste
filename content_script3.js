async function assignTextToTextareas({ updateTextTo }) {
  console.log(updateTextTo);
  console.log(updateTextTo.length);

  //   document.getElementById("pasteTextInput").value = updateTextTo;
  //   document.getElementById("pasteTextButton").click();

  const sizeToPaste = 400;

  //   alert(`Est time = ${(updateTextTo / sizeToPaste) * 2}`);

  for (let x = 0; x < updateTextTo.length; x += sizeToPaste) {
    let printString = updateTextTo.slice(x, sizeToPaste + x);
    document.getElementById("pasteTextInput").value = printString;
    await new Promise((resolve) => setTimeout(resolve, 800));
    document.getElementById("pasteTextButton").click();
    await new Promise((resolve) => setTimeout(resolve, 1300));
  }
}

chrome.storage.local.get(["updateTextTo"], async function (items) {
  await assignTextToTextareas(items);
});
