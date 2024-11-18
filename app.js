var input = document.querySelector("#input");
var btn1 = document.querySelector("#btn");
var weatherInfoDiv = document.querySelector("#weather-info");

btn1.addEventListener("click", () => {
    var value = input.value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=52bfd4288adf4cf69b1174342241811&q=${value}&aqi=no`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            if (res.error) {
                weatherInfoDiv.innerHTML = `<h1>${res.error.message}</h1>`;
                return;
            } 
            weatherInfoDiv.innerHTML = `
                
            <h1 class="text-lg font-bold">${res.location.name}</h1>
               
                <h2>Temperature: ${res.current.temp_c}°C</h2>
                <h2>Dew Point: ${res.current.dewpoint_c}°C</h2>
                <h2>Last Updated: ${res.current.last_updated}</h2>
            `;
        })
        .catch((err) => {
            console.error(err);
            weatherInfoDiv.innerHTML = `<h1>Error fetching data</h1>`;
        });

    input.value = "";
});