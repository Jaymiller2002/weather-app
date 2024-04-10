// Define the API URL
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={9fd938103ec5b5fb92be500ba2c85323}';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
//Event listener for button clicks
const button = document.querySelectorAll("button");

document.getElementsByClassName("button").addEventListener('click', );
console.log(apiURL);