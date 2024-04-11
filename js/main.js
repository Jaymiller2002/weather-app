const buttonTemp = document.getElementById('buttonTemp');
const buttonCity = document.getElementById('buttonCity');
const buttonCondition = document.getElementById('buttonCondition');
const buttonImage = document.getElementById('buttonImage');
const button = document.querySelectorAll('button');
const form = document.getElementById('revealWeather');

//Add eventlistener to hear for reveal button

//Function to reveal weather info after click

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
    
    console.log(data.main.temp);

    buttonTemp.textContent = data.main.temp;//Gets temperature

    console.log(data.name);

    buttonCity.textContent = data.name;//Gets city name

    console.log(data.weather[0].description);

    buttonCondition.textContent = data.weather[0].description;//Gets current weather condition

    console.log(data.wind.speed);

    buttonImage.textContent = data.wind.speed;//Gets current image(Need to learn how to add pics)
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });