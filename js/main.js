// Define the API URL
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=38.0406&lon=-84.5037&appid=9fd938103ec5b5fb92be500ba2c85323';
// Make a GET request
fetch(apiUrl)
  .then(response => {
    //Check if the request was succesful
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok');
    } 
  })
  .then(data => {
    //Check that we are getting info from api
    console.log(data);
    //If getting info, parse the data into a javascript object
    const parsedData = JSON.parse(data);
    // Use the javascript object to create HTML elements
    parsedData.find(item => {
     const div = document.createElement('div');
      div.textContent = item.name;
      // Append the new elements to the DOM
      document.body.appendChild(div);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
