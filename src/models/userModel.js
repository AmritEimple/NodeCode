const db = require('../config/db');

const getUsers = async () => {
    const pool = await db;
    const result = await pool.request().query('SELECT * FROM users');
    return result.recordset;
};

module.exports = { getUsers };
