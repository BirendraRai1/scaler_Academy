const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// GET Register Page
router.get('/register', (req, res) => {
    res.render('register', { messages: req.flash() });
});

// POST Register User
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        req.flash('error', 'Please enter all fields');
        return res.redirect('/register');
    }

    try {
        let user = await User.findOne({ username });
        if (user) {
            req.flash('error', 'Username already exists');
            return res.redirect('/register');
        }

        user = new User({ username, password });
        await user.save(); // Password will be hashed by pre-save hook

        req.flash('success', 'Registration successful! Please log in.');
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Server error during registration.');
        res.redirect('/register');
    }
});

// GET Login Page
router.get('/login', (req, res) => {
    res.render('login', { messages: req.flash() });
});

// POST Login User
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        req.flash('error', 'Please enter all fields');
        return res.redirect('/login');
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            req.flash('error', 'Invalid credentials.');
            return res.redirect('/login');
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            req.flash('error', 'Invalid credentials.');
            return res.redirect('/login');
        }

        // --- Session Management ---
        req.session.userId = user._id; // Store user ID in session
        req.session.username = user.username; // Store username in session
        req.session.isAuth = true; // Mark session as authenticated

        req.flash('success', `Welcome back, ${user.username}!`);
        res.redirect('/dashboard'); // Redirect to protected dashboard
    } catch (err) {
        console.error(err);
        req.flash('error', 'Server error during login.');
        res.redirect('/login');
    }
});

// POST Logout User
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.redirect('/');
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        req.flash('success', 'You have been logged out.');
        res.redirect('/');
    });
});

module.exports = router;
