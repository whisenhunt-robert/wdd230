document.querySelector("#year").innerHTML = "&copy; 2023 | Robert Whisenhunt | North Carolina";

let lastUpdated = new Date(document.lastModified);
document.getElementById("lastUpdated").textContent = lastUpdated;