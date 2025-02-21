const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }
    res.json(`Reviewed code: ${code}`);
});

module.exports = router;
