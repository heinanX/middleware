const express = require('express');
const router = express.Router()
const users = require("../users.js")


router.get('/', (req, res) => {

    res.status(200).json(users)
})

// router.post('/', (req, res) => {
//     users.push(req.body)
//     res.status(201).json(users)

// })

module.exports = router