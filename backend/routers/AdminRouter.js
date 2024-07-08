const express = require('express');
const router = express.Router();
const Model = require('../models/AdminModel')

router.post('/create', async (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
        .then(() => {
            res.status(200).send('User Created')
        })
        .catch((err) => {
            res.status(500).send('User Creation Failed')
        })
    })
router.get("/getall", (req, res) => {
    Model.find({})
    .then ((result) => {
        res.json (result)
    }).catch ((err) => {
        console.error(err)
        res.status(500).json(err)
    });
    });

module.exports = router;
