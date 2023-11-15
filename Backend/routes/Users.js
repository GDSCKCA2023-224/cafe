const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json('List of users');
});

router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json(`Details of user ${userId}`);
});

router.post('/users', (req, res) => {
    res.json('Create a new user');
});

router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json(`Update user ${userId}`);
});

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json(`Delete user ${userId}`);
});

module.exports = router;