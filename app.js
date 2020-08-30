//Importing packages
const express = require('express');
const cors = require('cors');
require('./db/db');

const app = express();
const port = process.env.PORT || 8000;

//Importing routes
const upload = require('./routes/insert');
const display = require('./routes/display');

//Importing middleware
app.use(cors());
app.use(express.json());
app.use(upload);
app.use(display);

//listening...
app.listen(port, () => {
    console.log('Serving on port: ' + port);
});