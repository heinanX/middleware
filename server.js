const express = require('express');
const app = express()
const router = require("./router/router.users.js")
const cors = require("cors")
app.use(express.json())
app.use(cors({
    credentials: true,
    origin : 'http://127.0.0.1:5500'
}))

app.use('/usersLogin', router)
app.use(express.static('public'))


app.listen(3000, () => { console.log('server is up and running')})



// I den här övningen skall du utveckla en headless inloggningssida.
// Nu skall du flytta över inloggnigslogiken till servern.

// Du skall utveckla ett API (Med express js) som du kan anropa från front end applikationen (Fetch) som skickar namn och lösenord till en route på servern.

// Skapa flera användare till ett object array (global array) på servern så att du kan logga in med olika användare. Varje användare skall ha ett unikt ID.

// Servern skall sedan kolla om det är en korrekt inloggning och i så fall svara med användarens ID, spara detta i localStorage på klienten. Vid felaktig inloggning skall en error skickas tillbaka.

 