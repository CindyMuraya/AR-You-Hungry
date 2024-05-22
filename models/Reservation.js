const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  numberOfPeople: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
