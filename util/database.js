const MySQL = require("mysql2");

const pool = MySQL.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: '123'
});

module.exports = pool.promise();