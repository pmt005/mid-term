const db = require('../connection');

/// Messages
/**
 * Add a message to the database
 * @param {{}} property An object containing all of the message details.
 * @return {Promise<{}>} A promise to the messages.
 */
const addMessage = function(message) {
  return pool
    .query(
      `INSERT INTO messages
    (message, sent_time, sender_id, receiver_id, item_id)
    VALUES ($1, Now(), $2, $3, $4)
    RETURNING *;`,
      [message.message, message.sender_id, message.receiver_id, message.item_id ])
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
 * Get all messages of a single item between two users.
 * @param {Integer} item_id The id of the item that they were talking.
 * @param {Integer} sender_id The id of the user who sent the message.
 * @param {Integer} receiver_id The id of the user who received the message.
 * @return {Promise<{}>} A promise to the messages of the item between two users.
 */
const getMessages = function(ids) {
  return pool
    .query(
      `SELECT *
    FROM messages
    WHERE item_id = $1
    AND sender_id = $2
    AND receiver_id = $3
    ORDER BY sent_time DESC;`,
      [ids])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
};

module.exports = { addMessage, getMessages };
