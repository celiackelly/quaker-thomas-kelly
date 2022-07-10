const express = require('express') 
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT

//Connect to database
const {MongoClient, ObjectID} = require('mongodb')
let db, 
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'quaker-thomas-kelly'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} database`)
        db = client.db(dbName)
    })
    .catch(err => console.log(err))

//Use middleware
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

