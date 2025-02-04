// dbConfig.js
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_e0BEqWfOmA8w@ep-patient-hall-a93mukif-pooler.gwc.azure.neon.tech/neondb?sslmode=require",
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;
