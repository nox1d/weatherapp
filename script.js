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
        showData(country, name, region, localtime);
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

function showData(country, name, region, localtime) {
    const dataContainer = document.getElementById("data_container");
    let content = `
    <p>Country: ${country}</p>
    <p>City: ${name}</p>
    <p>Region: ${region}</p>
    <p>Local time: ${localtime}</p>
    `;

    dataContainer.innerHTML = content;
}