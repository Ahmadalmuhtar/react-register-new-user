const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'login_form',
    password: 'ASKsome123!',
    port: 5432,
});

module.exports = pool;