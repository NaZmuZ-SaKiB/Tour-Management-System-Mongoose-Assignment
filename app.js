const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middlewares
app.use(express.json());
app.use(cors());

// Routes
const tourRoute = require('./routes/tour.route')

app.get("/", (req, res, next) => {
    res.send("Server is Running...")
})

// Post
app.use("/api/v1/tour", tourRoute)

module.exports = app;