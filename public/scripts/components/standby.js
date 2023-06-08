/* eslint-disable no-undef */
/* eslint-disable func-style */


$(document).ready(function() {

  const $standby = $(`<div id="standby"></div>`);

  window.$standby = $standby;

  window.standby = {};

  const addStandbyListing = function(inputStandbyListing) {
    $standby.append(inputStandbyListing);
  };

  const clearStandbyListings = function() {
    $standby.empty();
  };

  window.standby.clearStandbyListings = clearStandbyListings;

  const addStandbyListings = function(inputItems) {
    clearStandbyListings();
    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * 9);
      const items = inputItems[randomIndex];
      const shallowListing = shallowItemListing.createShallowListing(items);
      console.log(shallowListing);
      addStandbyListing(shallowListing);
    }
  };
  window.standby.addStandbyListings = addStandbyListings;

  // const inputItems = getItemsShallow("");
  // addStandbyListings(json.items);
  // views_manager.show('standby');


  // getAllItems("").then(function(json) {
  //   console.log(json.items);
  //   addStandbyListings(json.items);
  //   views_manager.show('standby');
  // });










});


