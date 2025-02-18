require('dotenv').config();
const { Pool } = require('pg');

// Connect to NeonDB using the connection string from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for NeonDB
});

// Test the connection
pool.connect()
  .then(() => console.log('Connected to NeonDB! 🚀'))
  .catch(err => console.error('Database connection error:', err));

// Example query function
async function getBuses() {
  try {
    const result = await pool.query('SELECT * FROM buses'); // Query the buses table
    console.log(result.rows);
  } catch (err) {
    console.error('Error fetching buses:', err);
  }
}

// Call function to test database query
getBuses();

module.exports = pool;
