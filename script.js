const key = "f3092f685da845638d070036241610";
const weatherForm = document.querySelector(".weather_form");
const cityInput = document.querySelector("#city_input");
const card = document.querySelector(".card");


weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await fetchData(city);
            // displayData(weatherData);
            console.log(weatherData);
        }
        catch(error) {
            displayError(error);
            console.error(error);
        }
    }
})


async function fetchData(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);

    if (!response.ok) {
        throw new Error("Could not fetch resource");
    }

    return await response.json();

        // let country = data.location.country;
        // let name = data.location.name;
        // let region = data.location.region;
        // let localtime = data.location.localtime;

        // let icon = data.current.condition.icon;
        // let condition = data.current.condition.text;
        // let temp_c = data.current.temp_c;
}

function displayData(data) {
    const {location: {name, country, region, localtime}, current: {condition: {icon, text}, humidity, temp_c}} = data;

    const img = card.querySelector("#weather_icon");
    const conditionDiv = card.querySelector("#condition");
    const cityDiv = card.querySelector("#city_name");
    const tempDiv = card.querySelector("temperature");

    img.src = icon;
    img.style.display = "block";

    conditionDiv.textContent = text;
    cityDiv.textContent = name;
    tempDiv.textContent = temp_c;
    // data.innerHTML = content;
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    card.appendChild(errorDisplay)

}