const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
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

    const token = jwt.sign({ userId: user.id }, 'MY_SECRET_KEY');
    // res.send({ token: token });
    res.send({ token });
});

module.exports = router;