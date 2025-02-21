const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aiRoutes = require('./src/routes/ai.routes'); // Ensure correct path

const app = express();

// ✅ CORS Configuration: Allow Frontend and Localhost for Testing
const allowedOrigins = [
  "https://ai-code-review-frontend.onrender.com",
  "http://localhost:3000" // Allow local testing
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true,
}));

// ✅ Middleware to parse JSON
app.use(bodyParser.json());

// 🟢 Health Check Endpoint
app.get('/', (req, res) => {
  res.send('✅ Backend is running perfectly!');
});

// ✅ Register AI routes under /ai
app.use('/ai', aiRoutes);

// 🟠 Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "🚫 Route not found!" });
});

// 🚀 Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
