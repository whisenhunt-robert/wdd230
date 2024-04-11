const tempMaxElement = document.getElementById('temp-max');
const weatherMessage = document.querySelector('.weather-message');

// Fetch temperature data
const currentTempMax = 42;

// Update the temperature display
tempMaxElement.textContent = `${currentTempMax}°F`;

// Show the weather message
function showWeatherMessage() {
    weatherMessage.style.display = 'block';
}

// Close the weather message
function closeMessage() {
    weatherMessage.style.display = 'none';
}