const pool = require('./pool');

const createUser = async (firstName, lastName, email, phoneNumber) => {
    const query = 'INSERT INTO users (first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [firstName, lastName, email, phoneNumber];

    try {
        const { rows } = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUser,
};
