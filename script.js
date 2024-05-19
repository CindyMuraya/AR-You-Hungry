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
  const filterOptions = document.getElementById('filterOptions');
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



    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://cindymuraya:Nancy2k02@aryouhungry.2iezaag.mongodb.net/?retryWrites=true&w=majority&appName=ARYouHungry";
    
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    
    async function run() {
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
    