require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const upload = require('./routes/upload');
const dbConnect = require('./db');

//start db connection
dbConnect();

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/upload', upload);

//listening on Port
app.listen(PORT, () => {
    console.log("Running on Port " + PORT);
})