const express = require('express');
const router = express.Router();
const Model = require('../models/ContactModel')

router.post('/add', async (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
        .then(() => {
            res.status(200).send('Feedback Stored')
        })
        .catch((err) => {
            res.status(500).send('Feedback not stored')
        })
    })

module.exports = router;
