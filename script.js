const key = "f3092f685da845638d070036241610";


async function fetchData(city) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

        let country = data.location.country;
        let name = data.location.name;
        let region = data.location.region;
        let localtime = data.location.localtime;

        let icon = data.current.condition.icon;
        let condition = data.current.condition.text;
        let temp_c = data.current.temp_c;
        let temp_f = data.current.temp_f;

        showData(country, name, region, localtime, icon, condition, temp_c, temp_f);
    }
    catch(error) {
        console.error(error);
    }
}


function findCity() {
    const city = document.getElementById("city").value;
    fetchData(city);
    document.getElementById("city").value = "";
}

function showData(country, name, region, localtime, icon, condition, temp_c, temp_f) {
    const dataContainer = document.getElementById("data_container");
    const data = dataContainer.querySelector("#data");
    const img = dataContainer.querySelector("#weather_icon");

    let content = `
    <p>${condition}</p>
    <p>Temperature: ${temp_c} Celcius / ${temp_f} Fahrenheit</p>
    <p>Country: ${country}</p>
    <p>City: ${name}</p>
    <p>Region: ${region}</p>
    <p>Local time: ${localtime}</p>
    `;

    img.src = icon;
    img.style.display = "block";
    data.innerHTML = content;
}