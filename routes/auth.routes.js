// Thirs party packages
const express = require('express');

// Our packages
const authController = require('../controllers/auth.controller');

// We load the routes
const router = express.Router();

// Routes to listen to

// Handles user sign up
router.get('/signup', authController.getSignup);
// Handles user log in
router.get('/login', authController.getLogin);

// End of routes

// Exports
module.exports = router;