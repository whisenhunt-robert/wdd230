let currentView = 'list'; // Default view

// Fetch JSON data
fetch('https://whisenhunt-robert.github.io/wdd230/chamber/data/members.json')
.then(response => response.json())
.then(data => {
  // Process and display data
  displayCompanyInformation(data);
  // Set the initial view
  toggleView(currentView);
})
.catch(error => console.error('Error fetching JSON:', error));

function displayCompanyInformation(companies) {
// Get the div where we will display company information
const companyListDiv = document.getElementById('companyList');

// Iterate through each company in the JSON data
companies.forEach(company => {
  // Create a div to hold the information for each company
  const companyDiv = document.createElement('div');
  companyDiv.classList.add('company');

  // Create HTML elements for each piece of information
  const nameElement = document.createElement('h2');
  nameElement.textContent = company.name;

  const addressElement = document.createElement('p');
  addressElement.textContent = `Address: ${company.address}`;

  const phoneElement = document.createElement('p');
  phoneElement.textContent = `Phone: ${company.phone}`;

  const websiteElement = document.createElement('p');
  websiteElement.innerHTML = `Website: <a href="${company.website}" target="_blank">${company.website}</a>`;

  const imageElement = document.createElement('img');
  imageElement.src = company.image;
  imageElement.alt = `${company.name} Logo`;

  const membershipElement = document.createElement('p');
  membershipElement.textContent = `Membership Level: ${company.membershipLevel}`;

  const otherInfoElement = document.createElement('p');
  otherInfoElement.textContent = `Other Information: ${company.otherInfo || 'N/A'}`;

  // Append the elements to the companyDiv
  companyDiv.appendChild(nameElement);
  companyDiv.appendChild(addressElement);
  companyDiv.appendChild(phoneElement);
  companyDiv.appendChild(websiteElement);
  companyDiv.appendChild(imageElement);
  companyDiv.appendChild(membershipElement);
  companyDiv.appendChild(otherInfoElement);

  // Append the companyDiv to the companyListDiv
  companyListDiv.appendChild(companyDiv);
});
}

function toggleView(view) {
    const companyListDiv = document.getElementById('companyList');
    currentView = view;

    if (view === 'grid') {
      companyListDiv.classList.add('grid-view');
    } else {
      companyListDiv.classList.remove('grid-view');
    }
}