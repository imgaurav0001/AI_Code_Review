const express = require('express');
const bodyParser = require('body-parser');
const aiRoutes = require('./src/routes/ai.routes'); // Correct path
const cors = require('cors');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Register AI routes under /ai
app.use('/ai', aiRoutes);

// Use Render's PORT or fallback to 3000 for local testing
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});