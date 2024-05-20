const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});

const locationicon1 = document.querySelector('#locationicon1');
const locicon1 = document.querySelector('#locicon1');
const location1 = document.querySelector('#locationinput1');

locationicon1.addEventListener('click', function(){
    location1.style.display = 'flex';
    locationicon1.style.display = 'none';
});

const locationicon2 = document.querySelector('#locationicon2');
const locicon2 = document.querySelector('#locicon2');
const location2 = document.querySelector('#locationinput2');

locationicon2.addEventListener('click', function(){
    location2.style.display = 'flex';
    locationicon2.style.display = 'none';
});

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');
const header = document.querySelector('#header');;

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display = 'block'
    }, 200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
});

const options = document.querySelectorAll('.slider .option');
const slides = document.querySelectorAll('.option');
let currentIndex = 0;

function changeSlide() {
  slides[currentIndex].classList.remove('active');

  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 7000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchinput');
  const filterOptions = document.getElementById('cuisineOptions');
  const restaurantList = document.getElementById('restaurant-list').getElementsByTagName('li');

  searchInput.addEventListener('keyup', filterRestaurants);
  filterOptions.addEventListener('change', filterRestaurants);

  function filterRestaurants() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCuisine  = filterOptions.value;

    Array.from(restaurantList).forEach(function(item) {
      const text = item.textContent.toLowerCase();
      const cuisine = item.dataset.cuisine === selectedCuisine || selectedCuisine === 'all';

      if (text.includes(searchTerm) && cuisine) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
});

const apiUrl = 'http://localhost:5000';

async function searchRestaurants() {
    const location = document.getElementById('location-input').value;
    const cuisine = document.getElementById('cuisineOptions').value;

    let query = '';
    if (location) query += `location=${location}&`;
    if (cuisine) query += `cuisine=${cuisine}`;

    const response = await fetch(`${apiUrl}/restaurants/search?${query}`);
    const restaurants = await response.json();

    displayResults(restaurants);
}

function displayResults(restaurants) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>Location: ${restaurant.location}</p>
            <p>Cuisine: ${restaurant.cuisine}</p>
            <p>Rating: ${restaurant.rating}</p>
            <button onclick="showReservationForm('${restaurant._id}')">Reserve</button>
        `;
        resultsDiv.appendChild(restaurantDiv);
    });
}

function showReservationForm(restaurantId) {
    document.getElementById('reservation-form').classList.remove('hidden');
    document.getElementById('reservation').onsubmit = function(event) {
        event.preventDefault();
        makeReservation(restaurantId);
    };
}

async function makeReservation(restaurantId) {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const partySize = document.getElementById('partySize').value;

    const reservation = { name, date, time, partySize };

    const response = await fetch(`${apiUrl}/restaurants/${restaurantId}/reservations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    });

    if (response.ok) {
        alert('Reservation made successfully!');
        document.getElementById('reservation-form').classList.add('hidden');
        document.getElementById('reservation').reset();
    } else {
        const error = await response.json();
        alert(`Error: ${error.msg}`);
    }
}

const cuisines = [
  { name: "Italian", image: "images/italian.jpg" },
  { name: "Sushi", image: "images/chinese.jpg" },
  { name: "Steakhouse", image: "images/mexican.jpg" },
  { name: "BBQ", image: "images/indian.jpg" },
  { name: "Indian", image: "images/japanese.jpg" },
  { name: "Pizza", image: "images/japanese.jpg" },
  { name: "Burger", image: "images/japanese.jpg" },
  { name: "Chinese", image: "images/japanese.jpg" },
  { name: "Mexican", image: "images/japanese.jpg" },
];

let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides");
  cuisines.forEach((cuisine, index) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
          <img src="${cuisine.image}" alt="${cuisine.name}">
          <div class="slide-content">
              <h2>${cuisine.name}</h2>
              <a href="#" class="explore-button" onclick="exploreCuisine('${cuisine.name}')">Explore</a>
          </div>
      `;
      slidesContainer.appendChild(slide);
  });
});

function moveSlide(direction) {
  const slidesContainer = document.querySelector(".slides");
  const totalSlides = cuisines.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function exploreCuisine(cuisine) {
  // Redirect to the restaurants page with the cuisine as a query parameter
  window.location.href = `restaurants.html?cuisine=${cuisine}`;
}



const form = document.getElementById('location-container');
const locationInput = document.getElementById('location-input');
const restaurantList = document.getElementById('restaurant-list');
const mapContainer = document.getElementById('map');

let map;
let markers = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const location = locationInput.value;
  if (location.trim() !== '') {
    getRestaurants(location);
  }
});

async function getRestaurants(location) {
  const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy to bypass CORS restriction
  const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=restaurant&key=${apiKey}`;
  
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    displayRestaurants(data.results);
    showMap(data.results, location);
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
  }
}

function displayRestaurants(restaurants) {
  restaurantList.innerHTML = '';
  restaurants.forEach(restaurant => {
    const restaurantCard = document.createElement('div');
    restaurantCard.classList.add('restaurant-card');
    restaurantCard.innerHTML = `
      <h3>${restaurant.name}</h3>
      <p>${restaurant.vicinity}</p>
      <p>Rating: ${restaurant.rating || 'N/A'}</p>
    `;
    restaurantList.appendChild(restaurantCard);
  });
}

function showMap(restaurants, location) {
  map = new google.maps.Map(mapContainer, {
    center: new google.maps.LatLng(location),
    zoom: 14
  });

  markers.forEach(marker => {
    marker.setMap(null);
  });
  markers = [];

  restaurants.forEach(restaurant => {
    const marker = new google.maps.Marker({
      position: restaurant.geometry.location,
      map: map,
      title: restaurant.name
    });
    markers.push(marker);
  });
}


function search() {
    var searchQuery = document.getElementById("searchInput").value;
    let filter = document.getElementById('search').value.toUpperCase();
    let item = document.querySelectorAll('.product');
    let l = document.getElementsByTagName('h3');
    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName('h3')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    else
    {
    item[i].style.display="none";
    }
    }
    }
