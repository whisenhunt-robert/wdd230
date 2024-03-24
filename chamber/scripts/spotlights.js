// Function to fetch JSON data asynchronously
async function fetchSpotlightData() {
    try {
        const response = await fetch('https://whisenhunt-robert.github.io/wdd230/chamber/data/members.json');
        const data = await response.json();

        // Process the data to display spotlight sections
        displaySpotlightSections(data);
    } catch (error) {
        console.error('Error fetching spotlight data:', error);
    }
}

// Function to display spotlight sections for specific companies
function displaySpotlightSections(data) {
    const spotlightSectionsContainer = document.getElementById('spotlight-sections');

    // Access the data of companies 1, 2, and 7 by their indices
    const company1 = data[0];
    const company2 = data[1];
    const company7 = data[6];

    // Create spotlight sections for each company
    createSpotlightSection(company1);
    createSpotlightSection(company2);
    createSpotlightSection(company7);
}

// Function to create a spotlight section
function createSpotlightSection(company) {
    const spotlightSection = document.createElement('div');
    spotlightSection.classList.add('spotlight-section');

    const spotlightImage = document.createElement('img');
    spotlightImage.src = company.image;
    spotlightImage.alt = company.name;

    const spotlightDetails = document.createElement('div');
    spotlightDetails.classList.add('spotlight-details');

    const spotlightName = document.createElement('h2');
    spotlightName.textContent = company.name;

    const spotlightAddress = document.createElement('p');
    spotlightAddress.textContent = company.address;

    const spotlightPhone = document.createElement('p');
    spotlightPhone.textContent = 'Phone: ' + company.phone;

    const spotlightWebsite = document.createElement('p');
    const websiteLink = document.createElement('a');
    websiteLink.href = company.website;
    websiteLink.textContent = 'Website';
    spotlightWebsite.appendChild(websiteLink);

    const spotlightOtherInfo = document.createElement('p');
    spotlightOtherInfo.textContent = company.otherInfo;

    // Append elements to the spotlight section
    spotlightDetails.appendChild(spotlightName);
    spotlightDetails.appendChild(spotlightAddress);
    spotlightDetails.appendChild(spotlightPhone);
    spotlightDetails.appendChild(spotlightWebsite);
    spotlightDetails.appendChild(spotlightOtherInfo);

    spotlightSection.appendChild(spotlightImage);
    spotlightSection.appendChild(spotlightDetails);

    document.getElementById('spotlight-sections').appendChild(spotlightSection);
}

// Call the async function to fetch and display the spotlight data
fetchSpotlightData();