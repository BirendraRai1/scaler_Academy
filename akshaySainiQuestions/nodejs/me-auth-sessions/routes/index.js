const express = require('express');
const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session.isAuth) {
        next(); // User is authenticated, proceed to the next middleware/route handler
    } else {
        req.flash('error', 'Please log in to view this resource.');
        res.redirect('/login'); // Redirect to login if not authenticated
    }
};

// Home Page (Public)
router.get('/', (req, res) => {
    res.render('home', { messages: req.flash() });
});

// Dashboard (Protected Route)
router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', {
        username: req.session.username, // Pass username from session to template
        userId: req.session.userId,     // Pass userId from session to template
        messages: req.flash()
    });
});

module.exports = router;