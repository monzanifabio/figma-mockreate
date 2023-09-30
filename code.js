// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true, width: 380, height: 400 });

// Function for loading all the needed fonts
const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  console.log("Awaiting the fonts.");
};
// Load the fonts
loadFonts().then(() => {
  console.log("Fonts fetched and ready to go!");
});

// Trigger detectSelection on start to avoid errors if text is already selected before the plugin is launched
detectSelection();

// Trigger on selection change
figma.on("selectionchange", () => {
  detectSelection();
});

// Check if the selection is of type text
function detectSelection() {
  const selection = figma.currentPage.selection;
  if (selection.length) {
    for (let i = 0; i < selection.length; i++) {
      if (selection[i].type == "TEXT") {
        figma.ui.postMessage({ type: selection.length, selected: true });
      }
    }
  } else {
    figma.ui.postMessage({ selected: false });
    console.log("No selection");
  }
}

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-random-text") {
    // for (var i = 0; i < msg.genStorage.length; i++) {
    //   console.log(msg.genStorage[i]);
    // }

    // const nodes = [];
    // let spacing = 0;

    //Create the table header if existing
    // if (msg.colHeader != "") {
    //   const header = figma.createText();
    //   header.fontSize = msg.fontSize;
    //   header.characters = msg.colHeader;
    //   header.x = figma.viewport.center.x;
    //   header.y = msg.textSpacing - msg.textSpacing * 2 - msg.fontSize;
    //   nodes.push(header);
    // }

    const selection = figma.currentPage.selection;
    const count = selection.length;

    //Loop through the text nodes
    for (let i = 0; i < count; i++) {
      // console.log(msg.genStorage[i]);
      selection[i].characters = msg.genStorage[i];
      // const text = figma.createText();
      // text.fontSize = msg.fontSize;
      // text.x = figma.viewport.center.x;
      // text.y = spacing;
      // text.characters = msg.genStorage[i];
      // figma.currentPage.appendChild(text);
      // nodes.push(text);
      // //Get current text height
      // let textHeight = text.height;
      // //Add spacing in between text elements
      // spacing += msg.textSpacing + textHeight;
    }
    // figma.currentPage.selection = nodes;
    // figma.group(figma.currentPage.selection, figma.currentPage);
    // figma.viewport.scrollAndZoomIntoView(nodes);
    figma.notify("Data generated");
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};
