// Restaurant class
class Restaurant {
  constructor(name, address, cuisine, rating) {
    this.name = name;
    this.address = address;
    this.cuisine = cuisine;
    this.rating = rating;
  }

  // Method to display restaurant details
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Address: ${this.address}`);
    console.log(`Cuisine: ${this.cuisine}`);
    console.log(`Rating: ${this.rating}`);
  }
}

// Array to store restaurant objects
const restaurants = [];

// Function to add a new restaurant
function addRestaurant(name, address, cuisine, rating) {
  const restaurant = new Restaurant(name, address, cuisine, rating);
  restaurants.push(restaurant);
}

// Function to display all restaurants
function displayAllRestaurants() {
  restaurants.forEach((restaurant) => {
    restaurant.displayDetails();
    console.log('----------------------');
  });
}

// Example usage
addRestaurant('Restaurant A', '123 Main St', 'Italian', 4.5);
addRestaurant('Restaurant B', '456 Elm St', 'Mexican', 3.8);
addRestaurant('Restaurant C', '789 Oak St', 'Chinese', 4.2);

displayAllRestaurants();
