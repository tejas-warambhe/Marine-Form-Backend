require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const upload = require('./routes/upload');
const admin = require('./routes/admin');
const dbConnect = require('./db');

//start db connection
dbConnect();

//middlewares
app.use(cors());
app.use(express.json());
app.use('/public/images', express.static(__dirname + '/public/images/'));

//Routes
app.use('/upload', upload);
app.use('/admin', admin)

//listening on Port
app.listen(PORT, () => {
    console.log("Running on Port " + PORT);
})