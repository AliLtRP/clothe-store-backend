const express = require('express');
const { register } = require('../models/auth');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send('ok');
});

router.post('/register', register);

module.exports = router;