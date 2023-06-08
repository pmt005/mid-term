const db = require('../connection');

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return db
    .query(
      `SELECT *
    FROM users
    WHERE email = $1;`,
      [email])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
};

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return db
    .query(
      `SELECT *
    FROM users
    WHERE id = $1;`,
      [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
};

/**
 * Add a new user to the database.
 * @param {{name: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function(user) {
  return db
    .query(
      `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;`,
      [user.name, user.email, user.password])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });

};


module.exports = { getUserWithEmail, getUserWithId, addUser };
