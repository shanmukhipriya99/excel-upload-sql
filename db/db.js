const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect((err) => {
    if(!err) {
        console.log('Database is connected!');
    } else {
        console.log('Error while connecting to database...');
    }
});

module.exports = connection;