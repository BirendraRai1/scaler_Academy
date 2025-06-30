// app.js
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const connectDB = require('./config/db'); // MongoDB connection
const authRoutes = require('./routes/auth'); // Authentication routes
const indexRoutes = require('./routes/index'); // General routes
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (for form data)
app.use(express.json()); // Parse JSON bodies (if you had API endpoints)

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views'); // Specify the views directory

// Session Middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET, // Replace with a strong, random string in production
        resave: false, // Don't save session if not modified
        saveUninitialized: false, // Don't create session until something is stored
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
            // secure: true, // Use 'true' in production with HTTPS
            httpOnly: true // Prevents client-side JS from accessing the cookie
        }
    })
);

// Flash Messages Middleware
app.use(flash());

// Make session data available to all templates (optional, but convenient)
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

// Routes
app.use('/', authRoutes); // Auth routes (register, login, logout)
app.use('/', indexRoutes); // General routes (home, dashboard)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


/*
*********/ 