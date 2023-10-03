// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true, width: 320, height: 420 });

// Function for loading starter fonts
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
figma.on("selectionchange", async () => {
  detectSelection();
});

// Check if the selection is of type text
async function detectSelection() {
  const selection = figma.currentPage.selection;
  console.log(selection);
  if (selection.length) {
    for (let i = 0; i < selection.length; i++) {
      await figma.loadFontAsync(selection[i].fontName);
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
    const selection = figma.currentPage.selection;
    const count = selection.length;

    //Loop through the text nodes
    for (let i = 0; i < count; i++) {
      selection[i].characters = msg.genStorage[i];
    }
    figma.notify("Data generated");
  }
};
