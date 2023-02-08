const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/AlienDB' 

const app = express()

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

// con.on('error',()=>{
//     console.log("Error in connecting to the database");
// })

app.use(express.json())

const alienRouter = require('./router/aliens')
app.use('/aliens',alienRouter)

// 127.0.0.1:9000/aliens/about


app.listen(8000, () => {
    console.log('Server started on port')
})