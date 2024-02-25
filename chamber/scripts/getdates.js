let currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;

// Discover Page JS
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve last visit date from localStorage
    let lastVisit = localStorage.getItem('lastVisit');

    // Get current date
    let currentDate = new Date();

    // If it's the first visit, display the welcome message
    if (!lastVisit) {
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        // Convert lastVisit to a Date object
        lastVisit = new Date(lastVisit);

        // Calculate the difference in milliseconds
        let timeDifference = currentDate - lastVisit;

        // Calculate days
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Display the appropriate message based on the time difference
        if (daysDifference === 0) {
            displayMessage("Back so soon! Awesome!");
        } else {
            let message = (daysDifference === 1) ? "day" : "days";
            displayMessage("You last visited " + daysDifference + " " + message + " ago.");
        }
    }

    // Save the current date in localStorage for the next visit
    localStorage.setItem('lastVisit', currentDate.toISOString());

    function displayMessage(message) {
        // Update the content of the sidebar
        document.getElementById('sidebar').innerText = message;
    }
});