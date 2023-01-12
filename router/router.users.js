const express = require('express');
const router = express.Router()
const users = require("../users.js")


router.get('/', (req, res) => {

    res.status(200).json(users)
})

router.post('/', (req, res) => {
    const { username, password} = req.body
    const user = users.find(element => element.username == username && element.password == password)
    console.log(user)
    res.status(200).json(user)
})
// router.post('/', (req, res) => {
//     users.push(req.body)
//     res.status(201).json(users)

// })

module.exports = router