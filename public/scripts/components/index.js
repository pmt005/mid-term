$(() => {
  function getAllItems(inputParam) {
    let url = "/api/items";
    if (inputParam) {
      url += "?" + inputParam;
    }
    console.log("I AM Here11")
    return $.ajax(url, { method: 'GET' });
  }


  getAllItems().then(function(json) {
    standby.addStandbyListings(json.items);
    views_manager.show('standby');
  });

});
