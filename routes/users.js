/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.post("/items", (req,res) => {
  const userId = 1;
  if (!userId) {
    return res.send({ error: "error" });
  }
  database
    .getAllItems(userId)
    .then((items) => res.send({ items }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
})


router.get('/', (req, res) => {
  res.render('users');
});



module.exports = router;
