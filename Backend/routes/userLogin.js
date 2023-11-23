
const express = require('express');
const router = express.Router();
const Customer = require('../model/customer');

router.post('/login', async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const foundUserName = await Customer.findOne({ userName });
        if (!foundUserName) {
            return res.status(401).json({ error: 'Invalid username, please refresh the page' });
        }

        const foundEmail = await Customer.findOne({ email });
        if (!foundEmail) {
            return res.status(401).json({ error: 'Invalid email address' });
        }

        const passwordComparison = await foundUserName.comparePassword(password);

        if (passwordComparison) {
            res.send('Password is correct');
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
