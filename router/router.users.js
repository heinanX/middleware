const express = require('express');
const router = express.Router()
const users = require("../server.js")
console.log(users);
router.get('/', (req, res) => {
    res.status(200).json(users)
})

module.exports = router