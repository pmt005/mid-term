$(() => {
  function getAllItems(inputParam) {
    let url = "/api/items";
    if (inputParam) {
      url += "?" + inputParam;
    }
    //console.log("I AM Here11")
    return $.ajax(url, { method: 'GET' });
  }


  getAllItems().then(function(json) {
    standby.addStandbyListings(json.items);
    views_manager.show('standby');

    $(".item").on('click',function(event) {
      event.preventDefault();
      const tempItemId = event.currentTarget.dataset.id;
      console.log("This is the id :" , tempItemId);
      //$(this).attr();
    });

  });


});
