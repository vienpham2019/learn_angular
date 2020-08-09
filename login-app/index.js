const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended: false}))

// connect to mongoose database 
mongoose.connect( process.env.MONGODB_URL , {useNewUrlParser: true , useCreateIndex: true , useUnifiedTopology: true})

const connection = mongoose.connection
connection.once('open' , () => console.log('Connect to database...')) 

// routers 
app.use('/api/users', require('./routers/api/user'))

// Serve static assets if in production 
if(process.env.NODE_ENV === "production"){
    // set static folder
    app.use(express.static('client/build'))

    app.get('*' , (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client' , 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log(`Listen to PORT ${PORT}`))