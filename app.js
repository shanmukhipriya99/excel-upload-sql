//Importing packages
const express = require('express');
const cors = require('cors');
require('./db/db');

const app = express();
const port = process.env.PORT || 8000;

//Importing routes

//Importing middleware
app.use(cors());
app.use(express.json());

//listening...
app.listen(port, () => {
    console.log('Serving on port: ' + port);
});