// Description: RESTful API routes for restaurants
const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// @route   GET /restaurants
// @desc    Get all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST /restaurants
// @desc    Add a new restaurant
router.post('/', async (req, res) => {
    const { name, location, cuisine, rating, tables } = req.body;
    try {
        let restaurant = new Restaurant({ name, location, cuisine, rating, tables });
        await restaurant.save();
        res.json(restaurant);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST /restaurants/:id/reservations
// @desc    Add a reservation
router.post('/:id/reservations', async (req, res) => {
    const { name, date, time, partySize } = req.body;
    const restaurantId = req.params.id;

    try {
        const dateObj = new Date(date);

        const available = await checkAvailability(restaurantId, dateObj, time);

        if (!available) {
            return res.status(400).json({ msg: 'No available tables at the requested time' });
        }

        let restaurant = await Restaurant.findById(restaurantId);
        restaurant.reservations.push({ name, date: dateObj, time, partySize });
        await restaurant.save();
        res.json(restaurant);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET /restaurants/search
// @desc    Search for restaurants by location and cuisine

// Endpoint to get all available locations
router.get('/locations', async (req, res) => {
    try {
        const locations = await Restaurant.distinct('location');
        res.json(locations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Endpoint to get all available cuisines
router.get('/cuisines', async (req, res) => {
    try {
        const cuisines = await Restaurant.distinct('cuisine');
        res.json(cuisines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

// Function to check table availability
const checkAvailability = async (restaurantId, date, time) => {
    const restaurant = await Restaurant.findById(restaurantId);
    const reservationsAtTime = restaurant.reservations.filter(reservation =>
        reservation.date.toISOString().split('T')[0] === date.toISOString().split('T')[0] &&
        reservation.time === time
    );

    return reservationsAtTime.length < restaurant.tables;
};
