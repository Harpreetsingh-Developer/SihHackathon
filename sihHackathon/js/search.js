// Create an array of cities and tourist places
var cities = [
    {
      name: 'Jaipur',
      places: ['Hawa Mahal', 'Amber Fort', 'City Palace']
    },
    {
      name: 'Delhi',
      places: ['Red Fort', 'Qutub Minar', 'India Gate']
    },
    {
      name: 'Agra',
      places: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri']
    }
  ];
  
  // Get the form element and add an event listener
  var form = document.getElementById('search-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the value of the input field
    var input = document.getElementById('search-input');
    var cityName = input.value;
  
    // Search the array of cities and tourist places
    var city = cities.find(function(city) {
      return city.name.toLowerCase() === cityName.toLowerCase();
    });
  
    // If a match is found, display the list of tourist places
    if (city) {
      var placesList = document.getElementById('places-list');
      placesList.innerHTML = ''; // Clear the previous list
  
      city.places.forEach(function(place) {
        var li = document.createElement('li');
        li.textContent = place;
        placesList.appendChild(li);
      });
    }
  });