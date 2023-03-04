const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'nik21091998',
    host: 'localhost',
    port: 3002,
    database: 'express'
})

module.exports = pool;