const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({extended: false})
)

const mongoURI = 'mongodb://localhost:27017/PREORDER-DURIAN'

mongoose
    .connect(
        mongoURI,{useNewUrlParser : true}
    ).then(() => console.log('Connected MongoDB!'))
    .catch(err => console.log(err))

//USER
const User = require('./services/UserService')
app.use('/user', User)

//TASK
// const Task = require('./services/TaskService')
// app.use('/task', Task)

app.listen(port, function(){
    console.log('Server on PORT : '+port)
})
