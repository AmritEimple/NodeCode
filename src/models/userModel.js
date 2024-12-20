const db = require('../config/db');
const sql = require('mssql'); 

const getUsers = async () => {
    const pool = await db;
    const result = await pool.request().query('SELECT * FROM users');
    return result.recordset;
};

const addUser = async (id, name) => {
    try {
        const pool = await db; // Ensure the connection pool is established
        const request = pool.request(); // Create a new request instance

        console.log('Inserting user with ID:', id, 'and Name:', name);

        // Add parameters and execute query
        await request
            .input('id', sql.Int, id) // Bind 'id' as an integer parameter
            .input('name', sql.NVarChar, name) // Bind 'name' as a string parameter
            .query('INSERT INTO Users (id, name) VALUES (@id, @name)'); // Use parameterized query

        console.log('User inserted successfully:', { id, name }); // Debug log
    } catch (error) {
        console.error('Error in addUser:', error); // Log detailed error
        throw error; // Propagate the error to the controller
    }
};

module.exports = { addUser, getUsers };


