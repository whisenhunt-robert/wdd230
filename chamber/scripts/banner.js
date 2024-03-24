// Function to check if today is Monday, Tuesday, or Wednesday
function isWeekday() {
    const today = new Date().getDay();
    return today >= 1 && today <= 3; // 1: Monday, 2: Tuesday, 3: Wednesday
  }
  
  // Function to close the banner
  function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
  }
  
  // Function to display the banner if it's a weekday
  function displayBanner() {
    if (isWeekday()) {
      const banner = document.getElementById('banner');
      banner.style.display = 'block';
    }
  }
  
  // Call displayBanner function when the page loads
  window.onload = displayBanner;  