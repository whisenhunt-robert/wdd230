// Code to check if the passwords match.
function validateForm() {
    // Get values from input fields
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;

    // Check if passwords match
    if (password !== rePassword) {
        // Display error message
        document.getElementById("errorMessage").innerHTML = "Passwords do not match.";
        
        // Prevent form submission
        return false;
    } else {
        // Clear any previous error message
        document.getElementById("errorMessage").innerHTML = "";
        
        // Allow form submission
        return true;
    }
}

// Code for the Range.
const rangevalue = document.getElementById("rangeValue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}