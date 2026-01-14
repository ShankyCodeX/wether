const apiKey = "YOUR_SECRET_API_KEY";
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
        console.log(data);

        if (response.ok) {
            // 1. Get the icon code from the API (e.g., "01d", "04n")
const iconCode = data.weather[0].icon;

// 2. Create the full URL for the icon
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

// 3. Update the image tag in your HTML
const iconElement = document.getElementById("weather-icon");
iconElement.src = iconUrl;
iconElement.alt = data.weather[0].description;
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
