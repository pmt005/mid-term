/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { getUserWithId } = require('../db/queries/users');
const router  = express.Router();


// MAHDI HTML FOR LOG IN
// <!-- Filter Options -->
//   <div class="filter-options">
//     <label for="filter">Filter:</label>
//     <select id="filter">
//       <option value="option1">Option 1</option>
//       <option value="option2">Option 2</option>
//       <option value="option3">Option 3</option>
//     </select>
//   </div>

//   <!-- Login/Register Form -->
//   <div class="user-login">
//     <form>
//       <input type="text" id="username" placeholder="Username">
//       <input type="password" id="password" placeholder="Password">
//       <button type="submit">Login</button>
//       <span>or</span>
//       <a href="#">Register</a>
//     </form>
//   </div>



router.get('/', (req, res) => {
  res.render('users');
});



module.exports = router;
