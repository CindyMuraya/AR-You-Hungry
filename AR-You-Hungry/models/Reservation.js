const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  reservations: [{
    name: String,
    date: Date,
    time: String,
    partySize: Number
}]
});

module.exports = mongoose.model('Reservation', reservationSchema)
