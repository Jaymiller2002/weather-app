const buttonTemp = document.getElementById('buttonTemp');
const buttonCity = document.getElementById('buttonCity');
const buttonCondition = document.getElementById('buttonCondition');
const buttonImage = document.getElementById('buttonImage');
const revealButton = document.querySelector('button');
const form = document.getElementById('revealWeather');
const weatherElements = document.querySelectorAll('.grid-container.mb-1.bg-warning');

//Initialize a variable to track the visibility state
//let isWeatherVisible = false;
//Hide weather info elements initially
// weatherElements.forEach(element => {
//   element.style.display = 'none';
//});
//Add eventlistener to hear for reveal button
//revealButton.addEventListener('submit', function(event){
  //event.preventDefault();
  //Toggle the visiblity state
  //isWeatherVisible = !isWeatherVisible;
  //Loop through weather info elements and make them visible-if isWeather false = block if true = none
  //weatherElements.forEach(element => {
   //element.style.display = isWeatherVisible ? 'block': 'none';
  //});
 //console.log('Button clicked!');
//});

//Add a function or eventlistener to check if input = 40513, if not return "please enter a vaild zipcode"
//inputNumber.addEventListener('input', function(event) {
  //console.log(inputNumber.value);
//});


// Define the API URL
// const apiUrl = '';
// // Make a GET request
// fetch(apiUrl)
//   .then(response => {
//     //Check if the request was succesful
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Network response was not ok');
//     } 
//   })
//   .then(data => {
//     //Check that we are getting info from api
//     console.log(data);
    
//     console.log(data.main.temp);

//     buttonTemp.textContent = data.main.temp;//Gets temperature

//     console.log(data.name);

//     buttonCity.textContent = data.name;//Gets city name

//     console.log(data.weather[0].description);

//     buttonCondition.textContent = data.weather[0].description;//Gets current weather condition

//     console.log(data.wind.speed);

//         // Create an image element
//         const img = document.createElement('img');
//         // Set the source of the image (assuming data.weather[0].icon contains the icon name)
//         img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//         // Set any additional attributes or styles if needed
//         img.alt = 'Weather Icon'; // Set alt text for accessibility
//         // Append the image to the buttonImage element
//         buttonImage.appendChild(img);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

  //Testing BELOW
  //
  //Seeeng if i can add another promise under this one to loop through any 
  //ZIP code in the world
  //
  //
//Testing Worked

const apiKey = '9fd938103ec5b5fb92be500ba2c85323';

// Function to validate ZIP code using OpenWeatherMap API
function validateZipCode(zipCode, buttonTemp, buttonCity, buttonCondition, buttonImage) {
  // Clear previous data
  buttonTemp.textContent = '';
  buttonCity.textContent = '';
  buttonCondition.textContent = '';
  buttonImage.innerHTML = '';

  // Construct the URL for the API request using template literals
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
  
  // Make a GET request to the API
  fetch(apiUrl)
      .then(response => {
          // Check if the request was successful
          if (response.ok) {
              // Parse the response JSON
              return response.json();
          } else {
              // If the request failed, throw an error
              throw new Error('Failed to fetch ZIP code data');
          }
      })
      .then(data => {
          // Check if the API response indicates a valid ZIP code
          if (data) {
              console.log('Valid ZIP code:', zipCode);
              
              // Log the data for debugging (optional)
              console.log(data);
              
              // Log the temperature
              console.log('Temperature:', data.main.temp);
    
              // Set the temperature text content
              buttonTemp.textContent =  data.main.temp;
              
              // Log the city name
              console.log('City:', data.name);
              
              // Set the city name text content
              buttonCity.textContent = data.name;
              
              // Log the weather condition
              console.log('Condition:', data.weather[0].description);
              
              // Set the weather condition text content
              buttonCondition.textContent = data.weather[0].description;
              
              // Log the wind speed
              console.log('Wind Speed:', data.wind.speed);
              
              // Create an image element for the weather icon
              const img = document.createElement('img');
              // Set the source of the image (assuming data.weather[0].icon contains the icon name)
              img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
              // Set alt text for accessibility
              img.alt = 'Weather Icon';
              // Append the image to the buttonImage element
              buttonImage.appendChild(img);
          } else {
              console.log('Invalid ZIP code:', zip);
              // Display an error message or take appropriate action
              alert('Please enter a valid ZIP code.');
          }
      })
      .catch(error => {
          // Log any errors that occur during the fetch operation
          console.error('Error:', error);
      });
}

// Event listener for form submission
document.getElementById('revealWeather').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();
  const zipCode = document.getElementById('inputNumber').value;
  // Call the function to validate the ZIP code
  validateZipCode(zipCode, buttonTemp, buttonCity, buttonCondition, buttonImage);
});