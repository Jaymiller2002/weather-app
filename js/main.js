// Define the API URL
const i = 'https://pro.openweathermap.org/data/2.5/forecast/climate?zip={40513},{+1}&appid={APIKey}';
const APIKey = '8ff8627e5760145923c8962bd8e95052';
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
