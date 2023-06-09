/* eslint-disable camelcase */
/*
 * All routes for Item Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { getItemsShallow, getItems, addItem, getItemId } = require('../db/queries/items');
const database = require("../db/connection");
const db = require('../db/connection');

router.post("/items", (req, res) => {
  const userId = 1; // Assuming the user ID is hardcoded as 1 for now

  if (!userId) {
    return res.send({ error: "error" }); // If userId is falsy, send an error response
  }

  const newItem = req.body; // Get the new item from the request body
  newItem.owner_id = userId; // Assign the userId as the owner_id of the new item

  addItem(newItem) // Add the new item to the database
    .then((item) => res.send({ item })) // If successful, send the added item as a response
    .catch((e) => {
      console.error(e);
      res.send(e); // If there's an error, send the error object as a response
    });
});


router.get("/items", (req, res) => {
  console.log("This is the new route", req.query);
  getItemsShallow(req.query, 5)
    .then((items) => res.send({ items }))
    .catch((e) => {
      console.error(e);
      console.log("This is the error");
      res.send(e);
    });
});

router.get("/id/:id", (req, res) => {
  console.log("Here I am", req.params);
    getItemId(req.params)
     .then((items) => res.send({ items }))
     .catch((e) => {
      console.error(e);
      console.log("This is the error");
      res.send(e);
    });
});




module.exports = router;
