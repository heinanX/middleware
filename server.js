const express = require('express');
const app = express()

app.use(express.json())

const users = [
    {"username": "tim", "password": "123", "id": 2},
    {"username": "jim", "password": "456", "id": 3},
    {"username": "rin", "password": "789", "id": 4},
    {"username": "tin", "password": "987", "id": 5},
    {"username": "sara", "password": "654", "id": 6},
    {"username": "linda", "password": "321", "id": 7}
]

app.get('/', (req, res) => {
    res.status(200).json(users)
})

app.post('/', (req, res) => {
    users.push(req.body)

    res.status(201).json(users)
})



app.listen(3000, () => { console.log('server is up and running')})



// I den här övningen skall du utveckla en headless inloggningssida.
// Nu skall du flytta över inloggnigslogiken till servern.

// Du skall utveckla ett API (Med express js) som du kan anropa från front end applikationen (Fetch) som skickar namn och lösenord till en route på servern.

// Skapa flera användare till ett object array (global array) på servern så att du kan logga in med olika användare. Varje användare skall ha ett unikt ID.

// Servern skall sedan kolla om det är en korrekt inloggning och i så fall svara med användarens ID, spara detta i localStorage på klienten. Vid felaktig inloggning skall en error skickas tillbaka.

 