const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyparser = require("body-parser")
const multer= require("multer");

const router = require('./routes/route');
//const router = require('./routes/awsconfig')
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


const { AppConfig } = require('aws-sdk');
app.use( multer().any())



mongoose.connect("mongodb+srv://FunctionUP:pj4Q7t49hhC0cAxi@cluster0.giu4q.mongodb.net/Richa5270-BookManag?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', router);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
