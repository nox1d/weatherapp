const key = "f3092f685da845638d070036241610";
const city = "Taichung";   


async function fetchData() {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.error(error);
    }
}

fetchData();