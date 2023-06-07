$(() => {

  const $shallowItemListings = $(``);

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
      const shallowListing = shallowItemListing.createListing(item);
      addShallowListing(shallowListing);
    }
  };
  window.shallowItemListings.addShallowListings = addShallowListings;




















});
