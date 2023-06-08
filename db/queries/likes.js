const db = require('../connection');

/// Likes
/**
 * Add a like to the database
 * @param {{}} property An object containing all of the like details.
 * @return {Promise<{}>} A promise to the likes.
 */
const addLike = function (like) {
  return db
    .query(
      `INSERT INTO likes
    (user_id, item_id)
    VALUES ($1, $2 )
    RETURNING *;`,
      [like.user_id, like.item_id])
    .then((result) => {
      console.log(result);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });

};


/**
 * Get all likes of a single user from the database.
 * @param {Integer} user_id The id of the user.
 * @return {Promise<{}>} A promise to the likes of the user.
 */
const getLikesWithUserId = function (user_id) {
  return db
    .query(
      `SELECT *
    FROM likes
    WHERE user_id = $1
    ORDER BY id;`,
      [user_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
};




module.exports = { addLike, getLikesWithUserId };
