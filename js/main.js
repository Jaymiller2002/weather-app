// Define the API URL
const i = 'http://api.openweathermap.org/geo/1.0/direct?q=Lexington,KY,US&limit=2&appid=8ff8627e5760145923c8962bd8e95052';
// Make a GET request
fetch(i)
  .then(response => {
    //Check if the request was succesful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Parse  the data into a javascript object
    const parsedData = JSON.parse(data);
    // Use the javascript object to create HTML elements
    parsedData.forEach(item => {
      const div = document.createElement('div');
      div.textContent = item.name;
      // Append the new elements to the DOM
      document.body.appendChild(div);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
