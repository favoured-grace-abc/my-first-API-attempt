const mainContainer = document.querySelector(".main-container");
const countryInput = document.querySelector(".input-container");
const inputField = document.querySelector(".input-field");
const fetchButton = document.querySelector("#fetchButton");
const countryInfo = document.querySelector("#countryInfo");
countryInfo.className =
  "country-info flex  items-center justify-center gap-32 bg-green-400text-green-700 font-semibold text-6xl p-12";

async function fetchCountryInfo() {
  const countryName = inputField.value.trim();
  if (countryName === "") {
    alert("Please enter a country name.");
    return;
  }

  url = `https://restcountries.com/v3.1/name/${countryName}`;
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const countryName = data[0].name.common;
    const capital = data[0].capital[0];
    const population = data[0].population;

    console.log(`Country Name IS: ${countryName}`);
    console.log(`Capital IS: ${capital}`);
    console.log(`Population IS: ${population}`);
    console.log(data);

    const countryInfoElement = document.createElement("div");
    const flagUrl = data[0].flags.png;
    const flagImage = document.createElement("img");
    flagImage.className = "flag-image w-64 h-auto mb-4 w-[300px] h-[200px]";
    flagImage.src = flagUrl;
    flagImage.alt = `Flag of ${countryName}`;

    countryInfoElement.className =
      "country-info bg-green-400 text-green-700 font-semibold text-4xl px-14 py-8";
    countryInfoElement.innerHTML = `
        <p>Country Name: ${countryName}</p>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
      `;
    countryInfo.innerHTML = "";
    countryInfo.appendChild(countryInfoElement);
    countryInfo.appendChild(flagImage);
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `An error occurred: ${error.message}`;
    errorMessage.className =
      "error-message bg-red-400 text-red-700 font-semibold text-6xl absolute top-[40%] left-[15%] p-12";
    mainContainer.appendChild(errorMessage);
    setTimeout(() => {
      mainContainer.removeChild(errorMessage);
    }, 5000);
  }
}

fetchButton.addEventListener("click", fetchCountryInfo);