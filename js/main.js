// Define the API URL
const i = 'http://api.openweathermap.org/geo/1.0/direct?q=Lexington,KY,US&limit=2&appid={APIkey}';
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
    console.log('Error:', error);
  });
