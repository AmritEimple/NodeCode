const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require("path");
const app = express();

// Middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "view")));

// Route to serve the main HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "index.html"));
});

// Route to serve the main HTML file
app.get("/ck", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "index1.html"));
});

app.set('view engine', 'ejs');
app.set('view', 'view');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', userRoutes);

app.get("/default", (req, res) => {
    res.send("Hello1233, World!");
});

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome!");
});


module.exports = app;
