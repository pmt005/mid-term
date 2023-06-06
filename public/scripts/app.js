/* eslint-disable no-undef */
// Client facing scripts here



  //Function to dynamicaly create a item and return that item
  const createItemThumb = function(itemObj) {
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












});
