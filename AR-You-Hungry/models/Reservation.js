const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    partySize: { type: Number, required: true }
});
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
