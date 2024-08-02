const express = require('express');
const router = express.Router();
const Model = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const verifyToken = require('./VerifyToken');
require('dotenv').config();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// : denotes url parameter

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {

            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
});

router.get('/getbyuser', verifyToken, (req, res) => {
    res.status(200).json(req.user);
});




router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id, firstname, lastname, email, avatar, role } = result;
                const payload = { _id, email,firstname,lastname };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '2 days' },
                    (err, token) => {

                        if (err) {
                            console.log(err);
                            res.status(500).json({ message: 'error creating token' })
                        } else {
                            res.status(200).json({ token,_id, role, avatar, firstname,lastname,email })
                        }

                    }

                )
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
});

router.get('/getbyemail/:email', (req,res) => {
    Model.findOne({ email: req.params.email})
    .then((result) => {
        if(result) res.status(200).json(result)
        else res.status(404).json({message:'User not found'})
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
    console.log(req.body);
});

router.get('/getcurrentuser', async (req, res) => {
    try {
        const userId = req.query.userId; // Accept userId as a query parameter
        const user = await Model.findById(userId).select('-password');
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.send(user);
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});


module.exports = router;