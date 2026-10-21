import peoplePage from "./pages/people.html?raw";
import contactPage from "./pages/contact.html?raw";
import dateTimePage from "./pages/date-time.html?raw";
import numbersMoneyPage from "./pages/numbers-money.html?raw";
import identityCustomPage from "./pages/identity-custom.html?raw";
import generatorSource from "./generator.js?raw";

const pageMarkup = [peoplePage, contactPage, dateTimePage, numbersMoneyPage, identityCustomPage].join("\n");
document.body.innerHTML = document.body.innerHTML.replace("<!-- VITE_DATASET_PAGES -->", pageMarkup);

const generatorScript = document.createElement("script");
generatorScript.textContent = generatorSource;
document.body.append(generatorScript);