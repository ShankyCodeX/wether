const apiKey = "a48c5233271ad5b16ddc5d688fb66cc5";
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById("weather-info").style.display = "block";
            document.getElementById("error-message").style.display = "none";
            
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
            document.getElementById("description").innerText = data.weather[0].description;
        } else {
            // This handles cases where city name is wrong
            document.getElementById("weather-info").style.display = "none";
            document.getElementById("error-message").style.display = "block";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}