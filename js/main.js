const buttonTemp = document.getElementById('buttonTemp');
const buttonCity = document.getElementById('buttonCity');
const buttonCondition = document.getElementById('buttonCondition');
const buttonImage = document.getElementById('buttonImage');
const revealButton = document.querySelector('button');
const form = document.getElementById('revealWeather');
const weatherElements = document.querySelectorAll('.grid-container.mb-1.bg-warning');
//Initialize a variable to track the visibility state
let isWeatherVisible = false;
//Hide weather info elements initially
weatherElements.forEach(element => {
  element.style.display = 'none';
});
//Add eventlistener to hear for reveal button
revealButton.addEventListener('click', function(event){
  event.preventDefault();
  //Toggle the visiblity state
  isWeatherVisible = !isWeatherVisible;
  //Loop through weather info elements and make them visible
  weatherElements.forEach(element => {
    element.style.display = isWeatherVisible ? 'block': 'none';
  });
  console.log('Button clicked!');
});

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

        // Create an image element
        const img = document.createElement('img');
        // Set the source of the image (assuming data.weather[0].icon contains the icon name)
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        // Set any additional attributes or styles if needed
        img.alt = 'Weather Icon'; // Set alt text for accessibility
        // Append the image to the buttonImage element
        buttonImage.appendChild(img);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });