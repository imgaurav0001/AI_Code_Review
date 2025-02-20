const express = require('express');
const aiRoutes = require('./routes/ai.routes');  // Correct the relative path
require('dotenv').config();

const app = express();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Use the AI routes
app.use('/ai', aiRoutes);

module.exports = app;
