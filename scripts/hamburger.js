const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Supposed to hide map when hamburger button is open
function toggleMapVisibility() {
    let mapContainer = document.getElementById('map-container');
    mapContainer.style.overflow = (mapContainer.style.overflow === 'hidden') ? 'visible' : 'hidden';
  }