const apiKey = '77c5e1d4a8505546f2eed31fc54ed190';
const city = 'Cozumel';
const countryCode = 'MX';
const units = 'imperial'; // Use imperial units for Fahrenheit
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=${units}`;

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract relevant weather information
        const currentTemp = data.main.temp;
        const currentHumidity = data.main.humidity;
        const nextDayForecast = data.weather[0].description;

        // Display the information on the page
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <p>Current Temperature: ${currentTemp}°C</p>
            <p>Current Humidity: ${currentHumidity}%</p>
            <p>Next Day's Forecast at 15:00: ${nextDayForecast}</p>
            <!-- You can also display the weather icon here -->
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to get weather data
getWeatherData();