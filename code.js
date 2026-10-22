// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true, width: 320, height: 430 });

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

function isAvatarTarget(node) {
  return node.type !== "TEXT" && "fills" in node && node.fills !== figma.mixed;
}

async function detectSelection() {
  const selection = figma.currentPage.selection;
  const textSelected = selection.length > 0 && selection.every((node) => node.type === "TEXT");
  const avatarSelected = selection.length > 0 && selection.every(isAvatarTarget);

  if (textSelected) {
    await Promise.all(selection.map((node) => figma.loadFontAsync(node.fontName)));
  }

  figma.ui.postMessage({
    type: "selection-state",
    count: selection.length,
    textSelected,
    avatarSelected,
  });
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === "create-random-text") {
    const selection = figma.currentPage.selection;
    if (selection.length !== msg.genStorage.length || !selection.every((node) => node.type === "TEXT")) {
      figma.notify("Select text layers before generating text.");
      return;
    }

    for (let i = 0; i < selection.length; i++) {
      selection[i].characters = msg.genStorage[i];
    }
    figma.notify("Data generated");
  }

  if (msg.type === "create-random-avatars") {
    const selection = figma.currentPage.selection;
    if (selection.length !== msg.avatars.length || !selection.every(isAvatarTarget)) {
      figma.notify("Select shape layers before applying avatars.");
      figma.ui.postMessage({ type: "avatar-generation-result", success: false });
      return;
    }

    try {
      selection.forEach((node, index) => {
        const image = figma.createImage(new Uint8Array(msg.avatars[index]));
        node.fills = [
          {
            type: "IMAGE",
            scaleMode: "FILL",
            imageHash: image.hash,
          },
        ];
      });
      figma.notify("Avatars applied");
      figma.ui.postMessage({ type: "avatar-generation-result", success: true });
    } catch (error) {
      console.error(error);
      figma.notify("Could not apply avatars");
      figma.ui.postMessage({ type: "avatar-generation-result", success: false });
    }
  }
};
