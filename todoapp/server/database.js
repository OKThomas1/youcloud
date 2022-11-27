const mysql = require('mysql2')

require('dotenv').config();

var connection = mysql.createConnection({
    host : process.env.TODOHOST,
    user : process.env.TODOUSER,
    password : process.env.TODOPASSWORD,
    database : process.env.TODODATABASE
})

exports.databaseConnection = connection