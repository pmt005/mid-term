/* eslint-disable camelcase */
/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');
//const {getItemsShallow} = require('../db/queries/items');
const database = require("../db/connection");

router.post("/items", (req,res) => {

  const userId = 1;
  if (!userId) {
    return res.send({ error: "error" });
  }


  const newItem = req.body;
  newItem.owner_id = userId;
  /*database
    .addItem(newItem)
    .then((item) => res.send({ item }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
    */

  res.send("this works ");
});

router.get("/items", (req, res) => {
console.log("This is req.query" , req.query);
  getItemsShallow(req.query, 5)
    .then((items) => res.send({ items }))
    .catch((e) => {
      console.error(e);
      console.log("This is the error");
      res.send(e);
    });
});



router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
