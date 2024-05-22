const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const reservationRoutes = require('./routes/reservations');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/reservations', reservationRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://cindymuraya:Nancy2k02@aryouhungry.2iezaag.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
