// Define the API URL
const i = 'https://api.openweathermap.org/data/2.5/weather?q={Lexington}&appid={API key}';
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

  fetch(i);