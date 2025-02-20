const express = require('express');
const bodyParser = require('body-parser');
const aiRoutes = require('./src/routes/ai.routes'); // Correct path
const cors = require('cors');

const app = express();

app.use(cors())

// Middleware to parse JSON
app.use(bodyParser.json()); 

// Register AI routes under /ai
app.use('/ai', aiRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
