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
router.get('/search', async (req, res) => {
    const { location, cuisine } = req.query;
    try {
        let query = {};
        if (location) {
            query.location = new RegExp(location, 'i'); // case-insensitive search
        }
        if (cuisine) {
            query.cuisine = new RegExp(cuisine, 'i'); // case-insensitive search
        }
        const restaurants = await Restaurant.find(query);
        res.json(restaurants);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;

// Helper function to check table availability (included from previous implementation)
const checkAvailability = async (restaurantId, date, time) => {
    const restaurant = await Restaurant.findById(restaurantId);
    const reservationsAtTime = restaurant.reservations.filter(reservation =>
        reservation.date.toISOString().split('T')[0] === date.toISOString().split('T')[0] &&
        reservation.time === time
    );

    return reservationsAtTime.length < restaurant.tables;
};
