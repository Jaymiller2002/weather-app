const buttonTemp = document.getElementById('buttonTemp');
const buttonWeather = document.getElementById('buttonWeather');
const buttonLatitude = document.getElementById('buttonLatitude');
const buttonLongitude = document.getElementById('buttonLongitude');
// Define the API URL
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=40513,us&appid=9fd938103ec5b5fb92be500ba2c85323';
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
    //const Data = JSON.parse(data);
    // Use the javascript object to create HTML elements
    console.log(data.main.temp);
    buttonTemp.textContent = data.main.temp;
    console.log(data.weather[0].description);
    buttonWeather.textContent = data.weather[0].description;
    console.log(data.coord.lat);
    buttonLatitude.textContent = data.coord.lat;
    console.log(data.coord.lon);
    buttonLongitude.textContent = data.coord.lon;
    // item => 
    //  const div = document.createElement('div');
    //   div.textContent = item.name;
    //   // Append the new elements to the DOM
    //   document.body.appendChild(div);
    // });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
