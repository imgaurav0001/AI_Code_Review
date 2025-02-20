const express = require("express");
const aiController = require("../controllers/ai.controller"); // Ensure the correct path to controller
const router = express.Router();

// Post request to get review
router.post("/get-review", aiController.getReview); // Ensure this route matches the controller method

module.exports = router;
