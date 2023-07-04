// get the client
const mysql = require('mysql2/promise');

console.log(process.env.DB_DB)
console.log(process.env.DB_HOST)

// create the connection to database
// require("dotenv").config()
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB
})

module.exports = connection;
