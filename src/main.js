const pageModules = import.meta.glob("./pages/*.html", { query: "?raw", import: "default", eager: true });
import generatorSource from "./generator.js?raw";

const datasetOptions = [...document.querySelector("#datasetSelector").options].filter((option) => option.value !== "null" && !option.disabled);
const pageMarkup = datasetOptions
  .map((option) => {
    const page = pageModules[`./pages/${option.value}.html`];
    if (!page) {
      throw new Error(`Missing UI page for dataset: ${option.value}`);
    }
    return page;
  })
  .join("\n");

document.body.innerHTML = document.body.innerHTML.replace("<!-- VITE_DATASET_PAGES -->", pageMarkup);

const generatorScript = document.createElement("script");
generatorScript.textContent = generatorSource;
document.body.append(generatorScript);
