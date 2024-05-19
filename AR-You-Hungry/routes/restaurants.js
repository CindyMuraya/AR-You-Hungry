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
    const { name, location, cuisine, rating } = req.body;
    try {
        let restaurant = new Restaurant({ name, location, cuisine, rating });
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
    try {
        let restaurant = await Restaurant.findById(req.params.id);
        restaurant.reservations.push({ name, date, time, partySize });
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
            query.location = new RegExp(location, 'i'); // case-insensitive
        }
        if (cuisine) {
            query.cuisine = new RegExp(cuisine, 'i'); // case-insensitive
        }
        const restaurants = await Restaurant.find(query);
        res.json(restaurants);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
