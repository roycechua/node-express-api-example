const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
    const user = new User({ email, password });
    await user.save();
    } catch(err) {
        return res.status(422).send(err.message);
    }

    res.send('You made a post request');
});

module.exports = router;