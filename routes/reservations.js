const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Create a new reservation
router.post('/reserve', async (req, res) => {
  const { restaurantName, customerName, date, time, numberOfPeople } = req.body;

  const newReservation = new Reservation({
    restaurantName,
    customerName,
    date,
    time,
    numberOfPeople
  });

  try {
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all reservations for a restaurant
router.get('/:restaurantName', async (req, res) => {
  try {
    const reservations = await Reservation.find({ restaurantName: req.params.restaurantName });
    res.json(reservations);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;