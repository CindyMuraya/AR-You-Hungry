const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

let reservations = []; // This array will act as our in-memory database

app.use(cors());
app.use(bodyParser.json());

// Handle reservation request
app.post('/api/reservations', (req, res) => {
    const reservation = req.body;
    
    if (!reservation.restaurantName || !reservation.userName || !reservation.reservationDate || !reservation.reservationTime || !reservation.numberOfPeople) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    reservations.push(reservation);
    res.status(200).json({ message: 'Reservation successful' });
});

// Get all reservations (for debugging purposes)
app.get('/api/reservations', (req, res) => {
    res.status(200).json(reservations);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
