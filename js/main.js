// Define the API URL
const i = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={38.0406}&lon={-84.5037}&appid={9fd938103ec5b5fb92be500ba2c85323}';

// Make a GET request
fetch(i)
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
