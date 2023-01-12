const express = require('express');
const router = express.Router()
const users = require("../users.js")
const cookieSession = require("cookie-session");
const { Router } = require('express');

router.use(cookieSession({
    secret: "s3cr3t",
    maxAge: 1000 * 100,
    httpOnly: true,
    sameSite: 'lax',
}))

router.get('/', (req, res) => {
    console.log('session', req.session)
    console.log('cookie inreq', req.headers.cookie);
    res.status(200).json(users)
})

router.post('/', (req, res) => {
    const { username, password} = req.body
    const user = users.find(element => element.username == username && element.password == password)

    req.session = { username }
    console.log(req.session)
    res.status(200).json(user)
})
// router.post('/', (req, res) => {
//     users.push(req.body)
//     res.status(201).json(users)

// })

module.exports = router