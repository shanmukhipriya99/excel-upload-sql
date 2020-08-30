const express = require('express');
const connection = require('../db/db');
const router = express.Router();

router.get('/display', (req, res) => {
    let query = 'SELECT * FROM customer';
    connection.query(query, (err, result) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

module.exports = router;