/* eslint-disable no-undef */
$(() => {

  const $shallowItemListings = $(`<div id="shallow"></div>`);

  window.$shallowItemListings = $shallowItemListings;

  window.shallowItemListings = {};

  const addShallowListing = function(inputShallowListing) {
    $shallowItemListings.append(inputShallowListing);
  };


  const clearShallowListings = function() {
    $shallowItemListings.empty;
  };

  window.shallowItemListings.clearShallowListings = clearShallowListings;

  const addShallowListings = function(items) {
    clearShallowListings();
    for (const itemId in items) {
      const item = items[itemId];
      const shallowListing = shallowItemListing.createShallowListing(item);
      //console.log(shallowListing);
      addShallowListing(shallowListing);
    }
    window.views_manager.show("listings", $shallowItemListings);
  };
  window.shallowItemListings.addShallowListings = addShallowListings;




















});
