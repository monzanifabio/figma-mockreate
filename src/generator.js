const btnCreate = document.getElementById("create");
const outputPreview = document.getElementById("outputPreview");

// Get every numeric input and prevent to ever be 0
const numInputs = document.querySelectorAll("input[type=number]");

numInputs.forEach(function (input) {
  input.addEventListener("change", function (e) {
    if (e.target.value == "") {
      e.target.value = 0;
    }
  });
});

function checkFormatSelected(el) {
  if (el.value == "custom") {
    document.getElementById("phoneDigits").type = "text";
  } else {
    document.getElementById("phoneDigits").type = "hidden";
  }
}

function truncateAddress(el) {
  if (el.checked) {
    document.getElementById("truncateInput").style.display = "flex";
  } else {
    document.getElementById("truncateInput").style.display = "none";
  }
}

function datasetController(el) {
  //Layout options startup
  if (el.value !== "null") {
    let options = document.getElementById("options");
    options.style.display = "block";
    let helper = document.getElementById("formHelper");
    let changelog = document.getElementById("changelog");
    helper.style.display = "none";
    changelog.style.display = "none";
  }

  //NAMES -------------------------------------------------------------------------
  //Display names section if names is selected
  if (el.value == "names") {
    let section = document.getElementById("section-names");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //SURNAMES -------------------------------------------------------------------------
  //Display surnames section if surname is selected
  if (el.value == "surnames") {
    let section = document.getElementById("section-surnames");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //FULLNAMES -------------------------------------------------------------------------
  //Display full names section if full names is selected
  if (el.value == "fullnames") {
    let section = document.getElementById("section-fullnames");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //USERNAMES -------------------------------------------------------------------------
  //Display  usernames section if usernames is selected
  if (el.value == "usernames") {
    let section = document.getElementById("section-usernames");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //EMAILS -------------------------------------------------------------------------
  //Display  emails section if emails is selected
  if (el.value == "emails") {
    let section = document.getElementById("section-emails");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //COMPANIES -------------------------------------------------------------------------
  //Display companies section if companies is selected
  if (el.value == "companies") {
    let section = document.getElementById("section-companies");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //PHONE NUMBERS -------------------------------------------------------------------------
  //Display  phone numbers section if phone numbers is selected
  if (el.value == "phones") {
    let section = document.getElementById("section-phones");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //ADDRESS -------------------------------------------------------------------------
  //Display address section if phone numbers is selected
  if (el.value == "address") {
    let section = document.getElementById("section-address");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //DATES -------------------------------------------------------------------------
  //Display dates section if dates is selected
  if (el.value == "dates") {
    let section = document.getElementById("section-dates");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //TIME -------------------------------------------------------------------------
  //Display times section if times is selected
  if (el.value == "times") {
    let section = document.getElementById("section-times");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //DATETIME -------------------------------------------------------------------------
  //Display datetime section if datetime is selected
  if (el.value == "datetime") {
    let section = document.getElementById("section-datetime");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //NUMBERS -------------------------------------------------------------------------
  //Display numbers section if numbers is selected
  if (el.value == "numbers") {
    let section = document.getElementById("section-numbers");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //MONEY -------------------------------------------------------------------------
  //Display money section if money is selected
  if (el.value == "money") {
    let section = document.getElementById("section-money");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //LICENSE PLATES -------------------------------------------------------------------------
  //Display license plates section if credit cards is selected
  if (el.value == "licenseplates") {
    let section = document.getElementById("section-licenseplates");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //CREDIT CARDS -------------------------------------------------------------------------
  //Display credit cards section if credit cards is selected
  if (el.value == "creditcards") {
    let section = document.getElementById("section-creditcards");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //ETHEREUM ADDRESS -------------------------------------------------------------------------
  //Display ethereum address section if ethereum is selected
  if (el.value == "ethereum") {
    let section = document.getElementById("section-ethereum");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //WIFI -------------------------------------------------------------------------
  //Display wifi network section if wifi is selected
  if (el.value == "wifi") {
    let section = document.getElementById("section-wifi");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //ADVANCED -------------------------------------------------------------------------
  //Display advanced section if advanced is selected
  if (el.value == "advanced") {
    let section = document.getElementById("section-advanced");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //CUSTOM -------------------------------------------------------------------------
  //Display custom section if custom is selected
  if (el.value == "custom") {
    let section = document.getElementById("section-custom");
    if (section.style.display == "none") {
      let sections = document.getElementsByTagName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  //AVATARS -----------------------------------------------------------------------
  if (el.value == "avatars") {
    let section = document.getElementById("section-avatars");
    let sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    section.style.display = "block";
  }

  updateCreateButton();
}
//Define array to store the generated results
let genStorage = [];
let count = 0;
let genderSelection;
let textSelectionAvailable = false;
let avatarSelectionAvailable = false;
let avatarGenerationInProgress = false;
const avatarAssetUrls = window.mockreateAvatarAssets || [];

function updateCreateButton() {
  const avatarMode = document.getElementById("datasetSelector").value === "avatars";
  const selectionAvailable = avatarMode ? avatarSelectionAvailable && avatarAssetUrls.length > 0 : textSelectionAvailable;
  btnCreate.disabled = avatarGenerationInProgress || !selectionAvailable;

  if (avatarMode && !avatarGenerationInProgress) {
    document.getElementById("avatarStatus").textContent = avatarAssetUrls.length ? "Select one or more shape layers to fill with random avatars." : "Add PNG or JPEG files to src/assets/avatars to enable avatars.";
  }
}

// Get the state of the selection
onmessage = (event) => {
  const message = event.data.pluginMessage;

  if (message.type === "selection-state") {
    count = message.count;
    textSelectionAvailable = message.textSelected;
    avatarSelectionAvailable = message.avatarSelected;
    updateCreateButton();
  }

  if (message.type === "avatar-generation-result") {
    document.getElementById("avatarStatus").textContent = message.success ? "Avatars applied." : "Could not apply avatars. Please try again.";
    avatarGenerationInProgress = false;
    updateCreateButton();
  }
};

document.getElementById("datasetSelector").addEventListener("change", updateCreateButton);

////////////////////////////////////////////////////////////////////////////////////
// GENERATE
////////////////////////////////////////////////////////////////////////////////////

async function generate() {
  //Empty the array on a new generation
  genStorage.length = 0;
  genderSelection = document.getElementById("genderSelection").value;
  const dataSelection = document.getElementById("datasetSelector").value;

  //NAMES -------------------------------------------------------------------------
  if (dataSelection == "names") {
    const requestURL = document.getElementById("datasetSelector").options[datasetSelector.selectedIndex].getAttribute("data-url");

    const request = new Request(requestURL);

    const response = await fetch(request);
    const items = await response.json();

    for (var i = 0; i < count; i++) {
      x = Math.floor(Math.random() * items.length);
      if (genderSelection === "both") {
        genStorage.push(items[x].name);
      } else if (items[x].gender === genderSelection) {
        genStorage.push(items[x].name);
      } else {
        genStorage.push(items[x].name);
      }
    }
  }

  //SURNAME -------------------------------------------------------------------------
  if (dataSelection == "surnames") {
    const requestURL = document.getElementById("datasetSelector").options[datasetSelector.selectedIndex].getAttribute("data-url");

    const request = new Request(requestURL);

    const response = await fetch(request);
    const items = await response.json();

    for (var i = 0; i < count; i++) {
      x = Math.floor(Math.random() * items.length);
      genStorage.push(items[x]);
    }
  }

  //FULLNAMES ----------------------------------------------------------------------
  if (dataSelection == "fullnames") {
    const requestURL = document.getElementById("datasetSelector").options[datasetSelector.selectedIndex].getAttribute("data-url");
    const request = new Request(requestURL);
    const response = await fetch(request);
    const items = await response.json();

    for (var i = 0; i < count; i++) {
      x = Math.floor(Math.random() * items.length);
      genStorage.push(items[x].full_name);
    }
  }

  //USERNAMES -----------------------------------------------------------------------
  if (dataSelection == "usernames") {
    const requestURL = document.getElementById("datasetSelector").options[datasetSelector.selectedIndex].getAttribute("data-url");
    const request = new Request(requestURL);
    const response = await fetch(request);
    const items = await response.json();

    for (var i = 0; i < count; i++) {
      x = Math.floor(Math.random() * items.length);
      genStorage.push(items[x].username);
    }
  }

  //EMAILS -------------------------------------------------------------------------
  if (dataSelection == "emails") {
    const requestURL = document.getElementById("datasetSelector").options[datasetSelector.selectedIndex].getAttribute("data-url");
    const request = new Request(requestURL);
    const response = await fetch(request);
    const items = await response.json();

    for (var i = 0; i < count; i++) {
      x = Math.floor(Math.random() * items.length);
      genStorage.push(items[x].email);
    }
  }

  //COMPANIES ----------------------------------------------------------------------
  if (dataSelection == "companies") {
    const requestURL = document.getElementById("datasetSelector").options[datasetSelector.selectedIndex].getAttribute("data-url");
    const request = new Request(requestURL);
    const response = await fetch(request);
    const items = await response.json();

    for (var i = 0; i < count; i++) {
      x = Math.floor(Math.random() * items.length);
      genStorage.push(items[x].company);
    }
  }

  let phonePrefix = document.getElementById("phonePrefix").value;
  let phoneDigits = document.getElementById("phoneDigits").value;
  let phoneFormat = document.getElementById("phoneFormat").value;

  function generateRandomPattern(pattern) {
    let result = "";

    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === "x") {
        const digit = Math.floor(Math.random() * 10);
        result += digit;
      } else {
        result += pattern[i];
      }
    }

    return result;
  }

  //PHONES --------------------------------------------------------------------------
  if (dataSelection == "phones" && phonePrefix !== "") {
    if (phoneDigits == "") {
      genStorage.push("Invalid format");
    }
    if (phoneFormat == "null") {
      genStorage.push("Invalid format");
    }

    if (phoneFormat == "custom" && phoneDigits !== "") {
      for (var i = 0; i < count; i++) {
        x = generateRandomPattern(phoneDigits);
        genStorage.push("+" + phonePrefix + " " + x);
      }
    }

    if (phoneFormat !== "null" && phoneFormat !== "custom") {
      for (var i = 0; i < count; i++) {
        x = generateRandomPattern(phoneFormat);
        genStorage.push("+" + phonePrefix + " " + x);
      }
    }
  }

  //ADDRESS ------------------------------------------------------------------------
  const countrySelector = document.getElementById("countrySelector");

  if (dataSelection == "address" && countrySelector.value !== "null") {
    const baseURL = "https://randommer.io/random-address?";
    const number = "100";
    const locale = countrySelector.value;
    try {
      const response = await fetch(baseURL + "number=" + number + "&culture=" + locale, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      for (var i = 0; i < count; i++) {
        x = Math.floor(Math.random() * data.length);
        console.log(data[x]);
        genStorage.push(data[x]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //DATES -------------------------------------------------------------------------
  let selectedYear = document.getElementById("selectedYear").value;
  let dateFormat = document.getElementById("dateFormat").value;

  if (dataSelection == "dates" && selectedYear !== "" && dateFormat != 0) {
    for (var i = 0; i < count; i++) {
      date = generateDateFormat(selectedYear, dateFormat);
      genStorage.push(date);
    }
  }

  //TIME --------------------------------------------------------------------------
  let timeFormat = document.getElementById("timeFormat").value;

  if (dataSelection == "times" && timeFormat != 0) {
    for (var i = 0; i < count; i++) {
      time = generateTimeFormat(timeFormat);
      genStorage.push(time);
    }
  }

  //DATETIME ----------------------------------------------------------------------
  let datetime = "";
  const datetimeYear = document.getElementById("datetimeYear").value;
  const datetimeDateFormat = document.getElementById("dateDatetimeFormat").value;
  const datetimeSeparator = document.getElementById("datetimeSeparator").value;
  const timeDatetimeFormat = document.getElementById("timeDatetimeFormat").value;

  if (dataSelection == "datetime" && datetimeYear !== "" && datetimeDateFormat != 0) {
    for (var i = 0; i < count; i++) {
      date = generateDateFormat(datetimeYear, datetimeDateFormat);
      time = generateTimeFormat(timeDatetimeFormat);
      datetime = date + datetimeSeparator + time;
      genStorage.push(datetime);
    }
  }

  // Function to generate random date based on the selected format and a given year
  function generateDateFormat(year, format) {
    d = (Math.floor(Math.random() * (31 - 1 + 1)) + 1).toString();
    m = (Math.floor(Math.random() * (12 - 1 + 1)) + 1).toString();
    let mm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (format == 1) {
      genDate = d + "/" + m + "/" + year;
      return genDate;
    }
    if (format == 2) {
      genDate = d + "-" + m + "-" + year;
      return genDate;
    }
    if (format == 3) {
      genDate = d + " " + m + " " + year;
      return genDate;
    }
    if (format == 4) {
      genDate = d + " " + mm[Number(m) - 1] + " " + year;
      return genDate;
    }
  }

  // Function to generate random time based on the selected format
  function generateTimeFormat(format) {
    hh = (Math.floor(Math.random() * (23 - 1 + 1)) + 1).toString();
    h = (Math.floor(Math.random() * (12 - 1 + 1)) + 1).toString();
    m = (Math.floor(Math.random() * (60 - 1 + 1)) + 1).toString();
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (m < 10) {
      m = "0" + m;
    }
    let time = ["am", "pm"];
    x = Math.floor(Math.random() * time.length);
    if (format == 1) {
      genTime = hh + ":" + m;
      return genTime;
    }
    if (format == 2) {
      genTime = h + ":" + m + time[x];
      return genTime;
    }
  }

  let numberFrom = parseInt(document.getElementById("numberFrom").value);
  let numberTo = parseInt(document.getElementById("numberTo").value);
  let decimalCheck = document.getElementById("numberRangeDecimals");

  if (dataSelection == "numbers" && numberFrom !== "" && numberTo !== "") {
    if (decimalCheck.checked) {
      for (var i = 0; i < count; i++) {
        x = (Math.random() * (numberTo - numberFrom + 1) + numberFrom).toFixed(2).toString();
        genStorage.push(x);
      }
    } else {
      for (var i = 0; i < count; i++) {
        x = (Math.floor(Math.random() * (numberTo - numberFrom + 1)) + numberFrom).toString();
        genStorage.push(x);
      }
    }
  }

  let moneyFrom = parseInt(document.getElementById("moneyFrom").value);
  let moneyTo = parseInt(document.getElementById("moneyTo").value);
  let currency = document.getElementById("moneyCurrency").value;

  if (dataSelection == "money" && moneyFrom !== "" && moneyTo !== "") {
    if (document.getElementById("symbol-prepend").checked) {
      console.log("prepend");
      for (var i = 0; i < count; i++) {
        x = currency + (Math.random() * (moneyTo - moneyFrom + 1) + moneyFrom).toFixed(2).toString();
        genStorage.push(x);
      }
    } else if (document.getElementById("symbol-append").checked) {
      console.log("append");
      for (var i = 0; i < count; i++) {
        x = (Math.random() * (moneyTo - moneyFrom + 1) + moneyFrom).toFixed(2).toString() + currency;
        genStorage.push(x);
      }
    }
  }

  if (dataSelection == "licenseplates") {
    // btnCreate.removeAttribute("disabled");
    for (var i = 0; i < count; i++) {
      a = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 2)
        .toUpperCase();
      b = (Math.floor(Math.random() * (999 - 123 + 1)) + 123).toString();
      c = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 2)
        .toUpperCase();

      genStorage.push(a + " " + b + " " + c);
    }
  }

  if (dataSelection == "ethereum") {
    const truncateCheck = document.getElementById("addressTruncate");
    let address = "";
    let hexChar = "0123456789abcdefABCDEF";
    if (truncateCheck.checked) {
      let truncatePre = document.getElementById("truncatePre").value;
      let truncateMid = document.getElementById("truncateMid").value;
      let truncatePost = document.getElementById("truncatePost").value;
      for (var i = 0; i < count; i++) {
        for (var a = 0; a < 40; a++) {
          address += hexChar.charAt(Math.floor(Math.random() * hexChar.length));
        }
        let addressPre = address.slice(2, truncatePre);
        let addressPost = address.slice(-truncatePost);
        address = addressPre + truncateMid + addressPost;
        genStorage.push("0x" + address);
        address = "";
      }
    } else {
      for (var i = 0; i < count; i++) {
        for (var a = 0; a < 40; a++) {
          address += hexChar.charAt(Math.floor(Math.random() * hexChar.length));
        }
        genStorage.push("0x" + address);
        address = "";
      }
    }
  }

  if (dataSelection == "wifi") {
    const requestURL = document.getElementById("datasetSelector").options[datasetSelector.selectedIndex].getAttribute("data-url");
    const request = new Request(requestURL);
    const response = await fetch(request);
    const items = await response.json();

    for (var j = 0; j < count; j++) {
      x = Math.floor(Math.random() * items.length);
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let string = "";

      for (var i = 0; i < 6; i++) {
        if (i === 0 || i === 3 || i === 5) {
          string += chars.charAt(Math.floor(Math.random() * 52)); // Random letter
        } else if (i === 1 || i === 2 || i === 4) {
          string += chars.charAt(52 + Math.floor(Math.random() * 10)); // Random number
        }
      }

      let compose = items[x].wifi + "_" + string;
      console.log(typeof compose);
      genStorage.push(compose);
    }
  }

  if (dataSelection == "advanced") {
    const advancedPattern = document.getElementById("advancedPattern").value;
    const advancedWildcard = document.getElementById("advancedWildcard").value;

    function generateWildcardValue(type) {
      switch (type) {
        case "1": // Numbers
          return Math.floor(Math.random() * 10).toString();
        case "2": // Letters
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        case "3": // Numbers and letters
          const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          return chars.charAt(Math.floor(Math.random() * chars.length));
        default:
          return "*";
      }
    }

    for (var i = 0; i < count; i++) {
      let result = advancedPattern;
      // Replace each * with a random value based on wildcard type
      while (result.includes("*")) {
        result = result.replace("*", generateWildcardValue(advancedWildcard));
      }
      genStorage.push(result);
    }
  }

  if (dataSelection == "creditcards") {
    for (var i = 0; i < count; i++) {
      x = (Math.floor(Math.random() * (9999999999999999 - 1234567890123456 + 1)) + 1234567890123456).toString().replace(/\d{4}(?=.)/g, "$& ");
      genStorage.push(x);
    }
  }

  const customDataset = document.getElementById("customDataset");
  const customDatasetKey = document.getElementById("customDatasetKey").value.toString();

  if (dataSelection == "custom" && customDataset != "" && customDatasetKey != "") {
    const requestURL = document.getElementById("customDataset").value;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const items = await response.json();

    for (var i = 0; i < count; i++) {
      x = Math.floor(Math.random() * items.length);
      genStorage.push(items[x][customDatasetKey]);
    }
  }
}

async function generateAvatars() {
  avatarGenerationInProgress = true;
  updateCreateButton();
  document.getElementById("avatarStatus").textContent = "Generating avatars...";

  try {
    const avatars = await Promise.all(
      Array.from({ length: count }, async () => {
        const imageUrl = avatarAssetUrls[Math.floor(Math.random() * avatarAssetUrls.length)];
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error(`Could not load local avatar: ${response.status}`);
        }
        return Array.from(new Uint8Array(await response.arrayBuffer()));
      }),
    );

    parent.postMessage(
      {
        pluginMessage: {
          type: "create-random-avatars",
          avatars,
        },
      },
      "*",
    );
  } catch (error) {
    console.error(error);
    avatarGenerationInProgress = false;
    document.getElementById("avatarStatus").textContent = "Could not load local avatars. Check the image files and try again.";
    updateCreateButton();
  }
}

btnCreate.onclick = async () => {
  if (document.getElementById("datasetSelector").value === "avatars") {
    await generateAvatars();
    return;
  }

  await generate();

  parent.postMessage(
    {
      pluginMessage: {
        type: "create-random-text",
        genStorage,
      },
    },
    "*",
  );
};
