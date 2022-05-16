const btnCreate = document.getElementById('create');
  const outputPreview = document.getElementById('outputPreview');
  const results = document.getElementById('results');

  function datasetController(el) {
    //Layout options startup
    if (el.value !== "null") {
      let options = document.getElementById('options');
      options.style.display = "block";
      let helper = document.getElementById('formHelper');
      helper.style.display = "none";
    }

    //Display names section if names is selected
    if (el.value == "names") {
      let section = document.getElementById('section-names');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate();
    }
    //Display surnames section if surname is selected
    if (el.value == "surnames") {
      let section = document.getElementById('section-surnames');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }
    //Display full names section if full names is selected
    if (el.value == "fullnames") {
      let section = document.getElementById('section-fullnames');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }
    //Display  usernames section if usernames is selected
    if (el.value == "usernames") {
      let section = document.getElementById('section-usernames');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }
    //Display  emails section if emails is selected
    if (el.value == "emails") {
      let section = document.getElementById('section-emails');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }
    //Display  phone numbers section if phone numbers is selected
    if (el.value == "phones") {
      let section = document.getElementById('section-phones');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }

    //Display dates section if dates is selected
    if (el.value == "dates") {
      let section = document.getElementById('section-dates');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }

    //Display times section if times is selected
    if (el.value == "times") {
      let section = document.getElementById('section-times');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }

    //Display numbers section if numbers is selected
    if (el.value == "numbers") {
      let section = document.getElementById('section-numbers');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.removeAttribute('disabled');
      } else {
        section.style.display = "none";
      }
      generate()
    }

    //Display money section if money is selected
    if (el.value == "money") {
      let section = document.getElementById('section-money');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.removeAttribute('disabled');
      } else {
        section.style.display = "none";
      }
      generate()
    }

    //Display credit cards section if credit cards is selected
    if (el.value == "creditcards") {
      let section = document.getElementById('section-creditcards');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.removeAttribute('disabled');
      } else {
        section.style.display = "none";
      }
      generate()
    }

    //Display custom section if custom is selected
    if (el.value == "custom") {
      let section = document.getElementById('section-custom');
      if (section.style.display == "none") {
        let sections = document.getElementsByTagName('section');
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = "none";
        }
        section.style.display = "block";
        btnCreate.setAttribute('disabled', '');
      } else {
        section.style.display = "none";
      }
      generate()
    }
  }
  //Define array to store the generated results
  let genStorage = [];
  let count;
  let genderSelection;

  async function generate() {
    //Empty the array on a new generation
    genStorage.length = 0;
    count = parseInt(document.getElementById('count').value);
    genderSelection = document.getElementById('genderSelection').value;
    const dataSelection = document.getElementById('datasetSelector').value;

    // const requestURL = 'https://cryptofonts.com/first-names.json';


    if (dataSelection == "names") {
      btnCreate.removeAttribute('disabled');
      const requestURL = document.getElementById('datasetSelector').options[datasetSelector.selectedIndex].getAttribute('data-url');
      console.log(requestURL);

      const request = new Request(requestURL);

      const response = await fetch(request);
      const items = await response.json();

      for (var i = 0; i < count; i++) {
        x = Math.floor(Math.random() * items.length);
        if (genderSelection === "both") {
          console.log(items[x].name, items[x].gender);
          genStorage.push(items[x].name)
          outputPreview.innerHTML = genStorage.join('<br>');
        } else if (items[x].gender === genderSelection) {
          console.log(items[x].name, items[x].gender)
          genStorage.push(items[x].name)
          outputPreview.innerHTML = genStorage.join('<br>');
        } else {
          console.log(items[x + 1].name, items[x].gender)
          genStorage.push(items[x].name)
          outputPreview.innerHTML = genStorage.join('<br>');
        }
      }
      console.log('------------------')
    }

    if (dataSelection == "surnames") {
      btnCreate.removeAttribute('disabled');
      const requestURL = document.getElementById('datasetSelector').options[datasetSelector.selectedIndex].getAttribute('data-url');
      console.log(requestURL);

      const request = new Request(requestURL);

      const response = await fetch(request);
      const items = await response.json();

      for (var i = 0; i < count; i++) {
        x = Math.floor(Math.random() * items.length);
        console.log(items[x]);
        genStorage.push(items[x])
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    if (dataSelection == "fullnames") {
      btnCreate.removeAttribute('disabled');
      const requestURL = document.getElementById('datasetSelector').options[datasetSelector.selectedIndex].getAttribute('data-url');
      console.log(requestURL);

      const request = new Request(requestURL);

      const response = await fetch(request);
      const items = await response.json();

      for (var i = 0; i < count; i++) {
        x = Math.floor(Math.random() * items.length);
        console.log(items[x].full_name);
        genStorage.push(items[x].full_name)
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    if (dataSelection == "usernames") {
      btnCreate.removeAttribute('disabled');
      const requestURL = document.getElementById('datasetSelector').options[datasetSelector.selectedIndex].getAttribute('data-url');
      console.log(requestURL);

      const request = new Request(requestURL);

      const response = await fetch(request);
      const items = await response.json();

      for (var i = 0; i < count; i++) {
        x = Math.floor(Math.random() * items.length);
        console.log(items[x].username);
        genStorage.push(items[x].username)
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    if (dataSelection == "emails") {
      btnCreate.removeAttribute('disabled');
      const requestURL = document.getElementById('datasetSelector').options[datasetSelector.selectedIndex].getAttribute('data-url');
      console.log(requestURL);

      const request = new Request(requestURL);

      const response = await fetch(request);
      const items = await response.json();

      for (var i = 0; i < count; i++) {
        x = Math.floor(Math.random() * items.length);
        console.log(items[x].email);
        genStorage.push(items[x].email)
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    let phonePrefix = document.getElementById('phonePrefix').value;
    let phoneDigits = document.getElementById('phoneDigits').value;

    if (dataSelection == "phones" && phonePrefix !== "" && phoneDigits !== "") {
      btnCreate.removeAttribute('disabled');
      for (var i = 0; i < count; i++) {
        x = (Math.floor(Math.pow(10, phoneDigits - 1) + Math.random() * 9 * Math.pow(10, phoneDigits - 1))).toString();
        console.log('+' + phonePrefix + ' ' + x);
        genStorage.push('+' + phonePrefix + ' ' + x);
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    let selectedYear = document.getElementById('selectedYear').value;
    let dateFormat = document.getElementById('dateFormat').value;

    if (dataSelection == "dates" && selectedYear !== "" && dateFormat != 0) {
      btnCreate.removeAttribute('disabled');
      for (var i = 0; i < count; i++) {
        d = (Math.floor(Math.random() * (31 - 1 + 1)) + 1).toString();
        m = (Math.floor(Math.random() * (12 - 1 + 1)) + 1).toString();
        let separator = ["_", "/", "-", " ", " "];
        let mm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        if (dateFormat == 1) {
          console.log(d + "/" + m + "/" + selectedYear);
          genStorage.push(d + "/" + m + "/" + selectedYear);
          outputPreview.innerHTML = genStorage.join('<br>');
        }
        if (dateFormat == 2) {
          console.log(d + "-" + m + "-" + selectedYear);
          genStorage.push(d + "-" + m + "-" + selectedYear);
          outputPreview.innerHTML = genStorage.join('<br>');
        }
        if (dateFormat == 3) {
          console.log(d + " " + m + " " + selectedYear);
          genStorage.push(d + " " + m + " " + selectedYear);
          outputPreview.innerHTML = genStorage.join('<br>');
        }
        if (dateFormat == 4) {
          console.log(d + " " + mm[m] + " " + selectedYear);
          genStorage.push(d + " " + mm[m] + " " + selectedYear);
          outputPreview.innerHTML = genStorage.join('<br>');
        }
      }
      console.log('------------------')
    }

    let timeFormat = document.getElementById('timeFormat').value;

    if (dataSelection == "times" && timeFormat != 0) {
      btnCreate.removeAttribute('disabled');
      for (var i = 0; i < count; i++) {
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
        x = Math.floor(Math.random() * time.length)
        if (timeFormat == 1) {
          console.log(hh + ":" + m);
          genStorage.push(hh + ":" + m);
          outputPreview.innerHTML = genStorage.join('<br>');
        }
        if (timeFormat == 2) {
          console.log(h + ":" + m + time[x]);
          genStorage.push(h + ":" + m + time[x]);
          outputPreview.innerHTML = genStorage.join('<br>');
        }
      }
      console.log('------------------')
    }

    let numberFrom = parseInt(document.getElementById('numberFrom').value);
    let numberTo = parseInt(document.getElementById('numberTo').value);

    if (dataSelection == "numbers" && numberFrom !== "" && numberTo !== "") {
      btnCreate.removeAttribute('disabled');

      for (var i = 0; i < count; i++) {
        x = (Math.floor(Math.random() * (numberTo - numberFrom + 1)) + numberFrom).toString();
        console.log(x);
        genStorage.push(x);
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    let moneyFrom = parseInt(document.getElementById('moneyFrom').value);
    let moneyTo = parseInt(document.getElementById('moneyTo').value);
    let currency = document.getElementById('moneyCurrency').value;

    if (dataSelection == "money" && moneyFrom !== "" && moneyTo !== "") {
      btnCreate.removeAttribute('disabled');

      for (var i = 0; i < count; i++) {
        x = currency + (Math.random() * (moneyTo - moneyFrom + 1) + moneyFrom).toFixed(2).toString();
        console.log(x);
        genStorage.push(x);
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    if (dataSelection == "creditcards") {
      btnCreate.removeAttribute('disabled');
      for (var i = 0; i < count; i++) {
        x = (Math.floor(Math.random() * (9999999999999999 - 1234567890123456 + 1)) + 1234567890123456).toString().replace(/\d{4}(?=.)/g, '$& ');
        console.log(x);
        genStorage.push(x);
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

    const customDataset = document.getElementById('customDataset');
    const customDatasetKey = document.getElementById('customDatasetKey').value.toString();

    if (dataSelection == "custom" && customDataset != "" && customDatasetKey != "") {
      btnCreate.removeAttribute('disabled');

      const requestURL = document.getElementById('customDataset').value;
      console.log(requestURL);

      const request = new Request(requestURL);

      const response = await fetch(request);
      const items = await response.json();

      for (var i = 0; i < count; i++) {
        x = Math.floor(Math.random() * items.length);
        console.log(items[x][customDatasetKey]);
        genStorage.push(items[x][customDatasetKey]);
        outputPreview.innerHTML = genStorage.join('<br>');
      }
      console.log('------------------')
    }

  }

  document.getElementById('create').onclick = () => {
    results.innerHTML = genStorage.join('<br>');
    results.classList.add('result-border');
  }
