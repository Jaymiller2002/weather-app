// Define the API URL
const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Lexington,KY,US&limit=2&appid=9fd938103ec5b5fb92be500ba2c85323';
// Make a GET request
fetch(apiUrl)
  .then(response => {
    //Check if the request was succesful
    if (!response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok');
    } 
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
