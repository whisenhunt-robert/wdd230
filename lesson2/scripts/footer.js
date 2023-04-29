document.querySelector("#footer").innerHTML = "&copy; 2023 | Robert Whisenhunt | Last Updated: ";

let lastUpdated = new Date(document.lastModified);
document.getElementById("lastUpdated").textContent = lastUpdated;