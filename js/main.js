// Define the API URL
const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={9fd938103ec5b5fb92be500ba2c85323}';

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