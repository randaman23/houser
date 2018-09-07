require('dotenv').config()

const express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive')
        ctrl = require('./controller')



const app = express()
PORT = 3232

app.use(bodyParser.json())

massive(process.env.DB_CONNECTION_STRING).then(db => {
    app.set("db", db)
    app.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`))
})

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.postHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)