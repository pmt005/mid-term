/* eslint-disable camelcase */
/* eslint-disable no-undef */
$(document).ready(function() {

  const $main = $('#container');

  window.views_manager = {};

  window.views_manager.show = function(displayType) {
    $newItemForm.detach();
    $shallowItemListings.detach();
    $standby.detach();

    switch (displayType) {
    case 'newItem':
      $newItemForm.prependTo($main);
      break;
    case 'shallowListings':
      $shallowItemListings.prependTo($main);
      break;
    case 'standby':
      $standby.prependTo($main);
      break;
    case 'error': {
      const $error = $(`<p>${arguments[1]}</p>`);
      $error.appendTo('body');
      setTimeout(() => {
        $error.remove();
        views_manager.show('listings');
      }, 2000);

      break;
    }
    }
  };

});
