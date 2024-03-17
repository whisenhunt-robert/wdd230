const apiKey = '77c5e1d4a8505546f2eed31fc54ed190';
const city = 'Winston-Salem';
const countryCode = 'US';
const units = 'imperial'; // Use imperial units for Fahrenheit
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=${units}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Convert temperature from Fahrenheit to Celsius
        const temperatureFahrenheit = data.main.temp;
        const temperatureCelsius = (temperatureFahrenheit - 32) * 5/9;

        // Update HTML elements with weather data
        document.getElementById('temperature').textContent = `${temperatureFahrenheit}°F (${temperatureCelsius.toFixed(2)}°C) - ${data.weather[0].description}`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        // Fetch forecast data
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;
        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
                // Display 3-day forecast
                const forecastList = document.getElementById('forecast-list');
                forecastList.innerHTML = ''; // Clear previous forecast data

                for (let i = 0; i < data.list.length; i += 8) {
                    const forecast = data.list[i];
                    const forecastDate = new Date(forecast.dt * 1000);
                    const forecastTemperature = forecast.main.temp;
                    const forecastDescription = forecast.weather[0].description;

                    const listItem = document.createElement('li');
                    listItem.textContent = `${forecastDate.toDateString()}: ${forecastDescription}, ${forecastTemperature}°F`;
                    forecastList.appendChild(listItem);
                }
            })
        });