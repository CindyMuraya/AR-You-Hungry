// Initialize express router
const express = require('express');
const router = express.Router();

// Import user service module
const userService = require('../services/user');

// Route to handle user registration
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Call the register function from the user service module
    const user = await userService.register(username, password);

    // Return the registered user details
    res.json(user);
  } catch (error) {
    // Handle any errors that occurred during registration
    res.status(500).json({ error: error.message });
  }
});

// Route to handle user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Call the login function from the user service module
    const token = await userService.login(username, password);

    // Return the authentication token
    res.json({ token });
  } catch (error) {
    // Handle any errors that occurred during login
    res.status(401).json({ error: error.message });
  }
});

// Route to handle user authentication
router.get('/authenticate', async (req, res) => {
  try {
    const token = req.headers.authorization;

    // Call the authenticate function from the user service module
    const user = await userService.authenticate(token);

    // Return the authenticated user details
    res.json(user);
  } catch (error) {
    // Handle any errors that occurred during authentication
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
