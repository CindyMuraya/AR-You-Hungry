// Purpose: Define the schema for the Restaurant model. 
// The schema includes the name, location, cuisine, rating, and reservations fields. 
// The reservations field is an array of Reservation objects. The Reservation model is defined in the Reservation.js file. The Restaurant model is exported for use in other files. 
const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    restaurantName: { type: String, required: true },
    customerName: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    partySize: { type: Number, required: true }
});

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number, required: true },
    tables: { type: Number, required: true },
    reservations: [ReservationSchema]
});


module.exports = mongoose.model('Restaurant', RestaurantSchema);
