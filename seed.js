// Purpose: Seed the database with sample restaurant data
const mongoose = require('mongoose');
const Restaurant = require('./AR-You-Hungry/models/Restaurant');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const sampleRestaurants = [
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
    ];

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const database = client.db('ARYouHungry');
        const collection = database.collection('restaurants');

        const result = await collection.insertMany(sampleRestaurants);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);