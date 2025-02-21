const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/ai.routes');  
require('dotenv').config();

const app = express();

// ✅ Middleware to parse JSON
app.use(bodyParser.json());

// ✅ Enable CORS for frontend communication
app.use(cors());

// ✅ Basic route to check backend is running
app.get('/', (req, res) => {
    res.send('Hello World! Backend is running.');
});

// ✅ Use AI routes
app.use('/ai', aiRoutes);

module.exports = app;
