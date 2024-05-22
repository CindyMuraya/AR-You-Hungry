const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');
const reservationsRouter = require('./routes/reservations');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', reservationsRouter);
app.use('/restaurants', require('./routes/restaurants'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
