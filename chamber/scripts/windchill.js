let temperature = parseFloat(document.getElementById("temperature").innerText);
let windSpeed = parseFloat(document.getElementById("windSpeed").innerText);
  
function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

const windchill = calculateWindChill(temperature, windSpeed);
document.getElementById("windChill").innerText = windchill.toFixed(2);