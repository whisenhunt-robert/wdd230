fetch('https://whisenhunt-robert.github.io/wdd230/scootsrentals/data/prices.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Data has been successfully fetched
    console.log(data); // You can do further processing here
    displayTable(data); // Example: Call a function to display the data in a table
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

function displayTable(data) {
  const table = document.getElementById('rentalTable');
  data.forEach(rental => {
    const row = table.insertRow();
    row.insertCell().textContent = rental.rental_type;
    row.insertCell().textContent = rental.max_persons;
    row.insertCell().textContent = rental.reservations_half_day;
    row.insertCell().textContent = rental.reservation_full_day;
    row.insertCell().textContent = rental.walk_in_half_day;
    row.insertCell().textContent = rental.walk_in_full_day;
  });
}