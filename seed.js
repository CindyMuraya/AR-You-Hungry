// Purpose: Seed the database with sample restaurant data
const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const connectDB = require('./config/db');

const sampleRestaurants = [
    { name: 'Italian Bistro', location: 'New York', cuisine: 'Italian', rating: 4.5, tables: 10, image: 'Italian Bistro.jpg'},
    { name: 'Spice & Smoke BBQ', location: 'Seattle', cuisine: 'BBQ', rating: 4.3, tables: 12, image: 'Spice & Smoke BBQ.jpg'},
    { name: 'Szechuan Delight', location: 'Chicago', cuisine: 'Chinese', rating: 4.7, tables: 15, image: 'Szechuan Delight.jpg'},
    { name: 'Taco Palace', location: 'Seattle', cuisine: 'Mexican', rating: 4.3, tables: 12, image: 'Taco Palace.jpg'},
    { name: 'Spice Haven', location: 'Chicago', cuisine: 'Indian', rating: 4.6, tables: 8, image: 'Spice Haven.jpg'},
    { name: 'Sushi World', location: 'Los Angeles', cuisine: 'Sushi', rating: 4.8, tables: 20, image: 'Sushi World.jpg'},
    { name: 'Sushi Zen', location: 'New York', cuisine: 'Sushi', rating: 4.5, tables: 13, image: 'Sushi Zen.jpg'},
    { name: 'La Trattoria', location: 'Hollywood', cuisine: 'Italian', rating: 4.8, tables: 27, image: 'La Trattoria.jpg'},
    { name: 'Italiano\'s Trattoria', location: 'Texas', cuisine: 'Italian', rating: 4.5, tables: 10, image: 'Italiano\'s Trattoria.jpg'},
    { name: 'The Sizzling Grill', location: 'Texas', cuisine: "Steak", rating: 4.7, tables: 14, image: 'Sizzling Grill.jpg' },
    { name: 'Sushi Paradise', location: 'California', cuisine: 'Sushi', rating: 4.7, tables: 15, image: 'Sushi Paradise.jpg'},
    { name: 'Curry Kingdom', location: 'New York', cuisine: 'Indian', rating: 4.8, tables: 24, image: 'Curry Kingdom.jpg'},
    { name: 'Mamma Mia Pizzeria', location: 'Texas', cuisine: "Pizza", rating: 4.4, tables: 16, image: 'Mamma Mia Pizzeria.jpg'},
    { name: 'Pizza Hut', location: 'Seattle', cuisine: 'Pizza', rating: 4.6, tables: 13, image: 'Pizza Hut.jpg'},
    { name: 'Burger Barn', location: 'Texas', cuisine: 'Burger', rating: 4.7, tables: 14, image: 'Burger Barn.jpg'},
    { name: 'Between Two Buns', location: 'Las Vegas', cuisine: "Burger", rating: 4.2, tables: 30, image: 'Between Two Buns.jpg'},
    { name: 'French Quarter', location: 'Chicago', cuisine: "Pizza", rating: 4.9, tables: 18, image: 'French Quarter.jpg'},
    { name: 'BBQ Central', location: 'Texas', cuisine: 'BBQ', rating: 4.6, tables: 25, image: 'BBQ Central.jpg'},
    { name: 'Italian Delight', location: 'Las Vegas', cuisine: 'Italian', rating: 4.4, tables: 10, image: 'Italian Delight.jpg' },
    { name: 'The Tavern', location: 'Chicago', cuisine: "Steak", rating: 4.5, tables: 15, image: 'The Tavern.jpg'},
    { name: 'Tapas Fiesta', location: 'Los Angeles', cuisine: "Mexican", rating: 4.7, tables: 12, image: 'Tapas Fiesta.jpg'},
    { name: 'Urban Burger', location: 'Hollywood', cuisine: 'Burger', rating: 4.2, tables: 30, image: 'Urban Burger.jpg'},
    { name: 'Pho House', location: 'Seattle', cuisine: 'Chinese', rating: 4.6, tables: 10, image: 'Pho House.jpg'},
    { name: 'Ribs & Racks', location: 'New York', cuisine: 'Steak', rating: 4.6, tables: 18, image: 'Ribs & Racks.jpg' },
    { name: 'Indian Spice', location: 'Los Angeles', cuisine: 'Indian', rating: 4.7, tables: 15, image: 'Indian Spice.jpg' },
    { name: 'Mexican Magic', location: 'Las Vegas', cuisine: "Mexican", rating: 4.5, tables: 20, image: 'Mexican Magic.jpg' },
    { name: 'Korean BBQ Grill', location: 'California', cuisine: 'BBQ', rating: 4.8, tables: 18, image: 'Korean BBQ Grill.jpg'},
    { name: 'La Pasta', location: 'Chicago', cuisine: 'Italian', rating: 4.6, tables: 12, image: 'La Pasta.jpg'},
    { name: 'Golden Dragon', location: 'Los Angeles', cuisine: 'Chinese', rating: 4.7, tables: 15, image: 'Golden Dragon.jpg'},
    { name: 'Fiesta Mexicana', location: 'Texas', cuisine: "Mexican", rating: 4.3, tables: 12, image: 'Fiesta Mexicana.jpg'}
    ];

async function run() {
    try {
        const database = (await connectDB()).connection;
        console.log("Connected correctly to server");

        const collection = database.collection('restaurants');

        const result = await collection.insertMany(sampleRestaurants);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
    }
}

run().catch(console.dir);