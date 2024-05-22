// Switch to the database.
use ('ARYouHungry')

// Create a new collection named "restaurants"
db.createCollection("restaurants")

// Insert the restaurant data into the restaurants collection.
db.restaurants.insertMany([
    {
        name: "Italian Bistro",
        location: "New York",
        cuisine: "Italian",
        rating: 4.5,
        tables: 10,
        reservations: []
    },
    {
        name: "Spice &amp; Smoke BBQ",
        location: "Seattle",
        cuisine: "BBQ",
        rating: 4.3,
        tables: 12,
        reservations: []
    },
    {
        name: "Szechuan Delight",
        location: "San Francisco",
        cuisine: "Chinese",
        rating: 4.7,
        tables: 15,
        reservations: []
    },
    {
        name: "Taco Palace",
        location: "Austin",
        cuisine: "Mexican",
        rating: 4.3,
        tables: 12,
        reservations: []
    },
    {
        name: "Spice Haven",
        location: "Chicago",
        cuisine: "Indian",
        rating: 4.6,
        tables: 8,
        reservations: []
    },
    {
        name: "Sushi World",
        location: "Los Angeles",
        cuisine: "Sushi",
        rating: 4.8,
        tables: 20,
        reservations: []
    },
    {
        name: "Sushi Zen",
        location: "Vancouver",
        cuisine: "Sushi",
        rating: 4.5,
        tables: 13,
        reservations: []
    },
    {
        name: "La Trattoria",
        location: "Hollywood",
        cuisine: "Italian",
        rating: 4.8,
        tables: 27,
        reservations: []
    },
    {
        name: "The Sizzling Grill",
        location: "Texas",
        cuisine: "Steakhouse",
        rating: 4.7,
        tables: 14,
        reservations: []
    },
    {
        name: "Sushi Paradise",
        location: "California",
        cuisine: "Sushi",
        rating: 4.7,
        tables: 15,
        reservations: []
    },
    {
        name: "Curry Kingdom",
        location: "New York",
        cuisine: "Indian",
        rating: 4.8,
        tables: 24,
        reservations: []
    },
    {
        name: "Mamma Mia Pizzeria",
        location: "Texas",
        cuisine: "Pizza",
        rating: 4.4,
        tables: 16,
        reservations: []
    },
    {
        name: "Burger Barn",
        location: "Texas",
        cuisine: "Burger",
        rating: 4.7,
        tables: 14,
        reservations: []
    },
    {
        name: "French Quarter",
        location: "New Orleans",
        cuisine: "Pizza",
        rating: 4.9,
        tables: 18,
        reservations: []
    },
    {
        name: "BBQ Central",
        location: "Dallas",
        cuisine: "Barbecue",
        rating: 4.6,
        tables: 25,
        reservations: []
    },
    {
        name: "Italian Delight",
        location: "Portland",
        cuisine: "Italian",
        rating: 4.4,
        tables: 10,
        reservations: []
    },
    {
        name: "The Taverna",
        location: "Miami",
        cuisine: "Steakhouse",
        rating: 4.5,
        tables: 15,
        reservations: []
    },
    {
        name: "Tapas Fiesta",
        location: "San Diego",
        cuisine: "Mexican",
        rating: 4.7,
        tables: 12,
        reservations: []
    },
    {
        name: "Urban Burger",
        location: "Nashville",
        cuisine: "Burger",
        rating: 4.2,
        tables: 30,
        reservations: []
    },
    {
        name: "Pho House",
        location: "Seattle",
        cuisine: "Chinese",
        rating: 4.6,
        tables: 10,
        reservations: []
    },
    {
        name: "Indian Spice",
        location: "Phoenix",
        cuisine: "Indian",
        rating: 4.7,
        tables: 15,
        reservations: []
    },
    {
        name: "Mexican Magic",
        location: "Las Vegas",
        cuisine: "Mexican",
        rating: 4.5,
        tables: 20,
        reservations: []
    },
    {
        name: "Korean BBQ Grill",
        location: "Atlanta",
        cuisine: "BBQ",
        rating: 4.8,
        tables: 18,
        reservations: []
    }
]);

// Verify that the data was inserted successfully.
db.restaurants.find().pretty()

// Create a new collection named "reservations"
db.createCollection("reservations")

// Insert the reservation data into the reservations collection.
db.reservations.insertMany([
    {
        name: "John Doe",
        email: " [email protected]",
        phone: "123-456-7890",
        partySize: 4,
        date: "2021-07-15",
        time: "18:00",
        restaurant: "Italian Bistro"
    },
    {
        name: "Jane Smith",
        email: " [email protected]",
        phone: "987-654-3210",
        partySize: 2,
        date: "2021-07-16",
        time: "19:30",
        restaurant: "Szechuan Delight"
    },
    {
        name: "Alice Johnson",
        email: " [email protected]",
        phone: "555-123-4567",
        partySize: 6,
        date: "2021-07-17",
        time: "20:00",
        restaurant: "Taco Palace"
    },
    {
        name: "Bob Brown",
        email: " [email protected]",
        phone: "111-222-3333",
        partySize: 3,
        date: "2021-07-18",
        time: "17:30",
        restaurant: "Sushi World"
    },
    {
        name: "Sarah Lee",
        email: " [email protected]",
        phone: "777-888-9999",
        partySize: 5,
        date: "2021-07-19",
        time: "18:30",
        restaurant: "La Trattoria"
    },
    {
        name: "Mike Davis",
        email: " [email protected]",
        phone: "444-555-6666",
        partySize: 8,
        date: "2021-07-20",
        time: "19:00",
        restaurant: "The Sizzling Grill"
    },
    {
        name: "Emily White",
        email: " [email protected]",
        phone: "999-888-7777",
        partySize: 4,
        date: "2021-07-21",
        time: "20:30",
        restaurant: "Sushi Paradise"
    },
    {
        name: "Chris Green",
        email: " [email protected]",
        phone: "666-777-8888",
        partySize: 3,
        date: "2021-07-22",
        time: "17:00",
        restaurant: "Curry Kingdom"
    },
    {
        name: "Laura Black",
        email: " [email protected]",
        phone: "222-333-4444",
        partySize: 2,
        date: "2021-07-23",
        time: "18:00",
        restaurant: "Mamma Mia Pizzeria"
    },
    {
        name: "Tom Grey",
        email: " [email protected]",
        phone: "888-999-0000",
        partySize: 6,
        date: "2021-07-24",
        time: "19:30",
        restaurant: "Burger Barn"
    }
]);

// Verify that the data was inserted successfully.
db.reservations.find().pretty()

// Create a new collection named "users"
db.createCollection("users")

// Insert the user data into the users collection.

db.users.insertMany([
    {
        name: "Admin User",
        email: " [email protected]",
        password: "admin123"
    },
    {
        name: "John Doe",
        email: " [email protected]",
        password: "john123"
    },
    {
        name: "Jane Smith",
        email: " [email protected]",
        password: "jane123"
    },
    {
        name: "Alice Johnson",
        email: " [email protected]",
        password: "alice123"
    },
    {
        name: "Bob Brown",
        email: " [email protected]",
        password: "bob123"
    },
    {
        name: "Sarah Lee",
        email: " [email protected]",
        password: "sarah123"
    },
    {
        name: "Mike Davis",
        email: " [email protected]",
        password: "mike123"
    },
    {
        name: "Emily White",
        email: " [email protected]",
        password: "emily123"
    },
    {
        name: "Chris Green",
        email: " [email protected]",
        password: "chris123"
    },
    {
        name: "Laura Black",
        email: " [email protected]",
        password: "laura123"
    },
    {
        name: "Tom Grey",
        email: " [email protected]",
        password: "tom123"
    }
]);

// Verify that the data was inserted successfully.
db.users.find().pretty()

// Create a new collection named "reviews"
db.createCollection("reviews")

// Insert the review data into the reviews collection.
db.reviews.insertMany([
    {
        name: "John Doe",
        email: " [email protected]",
        rating: 4.5,
        comment: "Great food and service!",
        restaurant: "Italian Bistro"
    },
    {
        name: "Jane Smith",
        email: " [email protected]",
        rating: 4.3,
        comment: "Delicious BBQ!",
        restaurant: "Spice &amp; Smoke BBQ"
    },
    {
        name: "Alice Johnson",
        email: " [email protected]",
        rating: 4.7,
        comment: "Authentic Chinese cuisine!",
        restaurant: "Szechuan Delight"
    },
    {
        name: "Bob Brown",
        email: " [email protected]",
        rating: 4.3,
        comment: "Best tacos in town!",
        restaurant: "Taco Palace"
    },
    {
        name: "Sarah Lee",
        email: " [email protected]",
        rating: 4.6,
        comment: "Amazing Indian food!",
        restaurant: "Spice Haven"
    },
    {
        name: "Mike Davis",
        email: " [email protected]",
        rating: 4.8,
        comment: "Fresh and delicious sushi!",
        restaurant: "Sushi World"
    },
    {
        name: "Emily White",
        email: " [email protected]",
        rating: 4.5,
        comment: "Great sushi selection!",
        restaurant: "Sushi Zen"
    },
    {
        name: "Chris Green",
        email: " [email protected]",
        rating: 4.8,
        comment: "Authentic Italian cuisine!",
        restaurant: "La Trattoria"
    },
    {
        name: "Laura Black",
        email: " [email protected]",
        rating: 4.7,
        comment: "Juicy steaks and great service!",
        restaurant: "The Sizzling Grill"
    },
    {
        name: "Tom Grey",
        email: " [email protected]",
        rating: 4.7,
        comment: "Best sushi in town!",
        restaurant: "Sushi Paradise"
    }
]);

// Verify that the data was inserted successfully.
db.reviews.find().pretty()

// Exit the MongoDB shell.
