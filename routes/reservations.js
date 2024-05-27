const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Create a new reservation
router.post('/', async (req, res) => {
  const { restaurantName, userName, reservationDate, reservationTime, numberOfPeople } = req.body;

  // Validate input
  if (!restaurantName || !userName || !reservationDate || !reservationTime || !numberOfPeople) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new reservation
  const reservation = new Reservation({
    restaurantName,
    customerName: userName,
    date: new Date(reservationDate),
    time: reservationTime,
    partySize: Number(numberOfPeople)
  });

  // Save the reservation
  try{
  await reservation.save();

  return res.status(201).json({ message: 'Reservation successful' });
  } catch (error) {
  console.error('Error making reservation:', error);
  return res.status(500).json({ message: 'Error making reservation' });
  }
}
);

module.exports = router;
