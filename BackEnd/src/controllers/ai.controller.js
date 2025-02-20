const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code; // Get the code from request body, as you're sending it in raw body in Postman

    if (!code) {
        return res.status(400).send("Code is required");
    }

    const response = await aiService(code);  // Passing code to the aiService function
    res.send(response);
};
