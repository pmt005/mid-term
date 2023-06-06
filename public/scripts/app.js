/* eslint-disable no-undef */
// Client facing scripts here

$(document).ready(function() {

  //Function to dynamicaly create a item and return that item
  const createItem = function(itemObj) {
    let $item = $(`
      <article class="item">
        <img class="thumbnail_photo1" src="/temp-images/thumbnail_1 Small.png">
        <div id="item-info">
          <span><strong>Price:  </strong>${itemObj.price}</span>
          <br>
          <span><strong>Title:  </strong>${itemObj.title}</span>
          <br>
          <span><strong>City:  </strong>${itemObj.city}</span>
        </div>
      </article>`);

    return $item;
  };


  //Listener for post new item submit to get post new item form
  $("#get-post-form").on('click',function(event) {
    event.preventDefault();
    const $val = $("#post-form-container");
    console.log("post button");
    $val.slideToggle();

  });

  //Listener for get listed items
  $("#get-listed-items").submit(function(event) {
    event.preventDefault();
    console.log("listed button");
  });

  //Listener for post new item submit to get post new item form
  $("#get-saved-items").submit(function(event) {
    event.preventDefault();
    console.log("saved button");
  });







});
