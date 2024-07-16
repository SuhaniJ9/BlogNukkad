const express = require('express');
const router = express.Router();
const Model = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const verifyToken = require('./VerifyToken');
require('dotenv').config();

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

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id)
     .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    }
     )
})

router.delete('/delete/:id', (req, res) => {
   Model.findByIdAndDelete(req.params.id)
   .then((result) =>{
    res.status(200).json(result);
   })
    .catch((err) => {
        res.status(500).json(err);
    })
   })
   router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({email: req.params.email})
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }
        else
        {
        res.status(404).json({message: 'User not found'});
        }
    })
    .catch((err) => {
        res.status(500).json(err);
    })
    console.log(req.body)
   })

   router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


 router.post('/authenticate', (req, res) => {
        console.log(req.body);
        Model.findOne(req.body)
            .then((result) => {
                if (result) {
                    const { _id, firstname, lastname, email,avatar } = result
                    const payload = { _id, firstname, lastname, email,avatar };
    
                    jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        { expiresIn: '100 days' },
                        (err, token) => {
                            if (err) {
                                console.log(err);
                                res.status(500).json({ message: 'error creating token' })
                            } else {
                                res.status(200).json({ token, firstname, lastname, email ,avatar})
                            }
                        }
                    )
                }
                else res.status(401).json({ message: 'Login Failed' })
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    })
module.exports = router;