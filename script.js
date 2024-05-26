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

setInterval(changeSlide, 5000);

options.forEach((option, index) => {
  option.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
  });
});

document.getElementById('discover').addEventListener('click', function() {
  window.location.href = 'restaurants.html';
});

const cuisines = [All, Italian, Sushi, Steak, BBQ, Indian, Pizza, Burger, Chinese, Mexican];

function discoverAll() {
  window.location.href = `restaurants.html`;
}

function exploreCuisine(cuisine) {
  window.location.href = `restaurants.html?cuisine=${encodeURIComponent(cuisine)}`;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get all the images
const images = document.querySelectorAll('img');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Load the actual image
      loadActualImage(entry.target);
      
      // Stop observing the image
      observer.unobserve(entry.target);
    }
  });
});

// Start observing each image
images.forEach((image) => {
  observer.observe(image);
});

// Function to load the actual image
function loadActualImage(image) {
  const src = image.dataset.src;
  
  // Set the source attribute to load the image
  image.setAttribute('src', src);
}

// Function to set caching headers for images
function setCacheHeadersForImages() {
  // Get all the images on the page
  const images = document.getElementsByTagName('img');

  // Loop through each image and set caching headers
  for (const image of images) {
    // Check if the image source is present in the list of image URLs
    if (imageUrls.includes(image.src)) {
      // Set caching headers
      image.setAttribute('loading', 'lazy');
      image.setAttribute('decoding', 'async');
    }
  }
}

// Call the function to set caching headers
setCacheHeadersForImages();


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


