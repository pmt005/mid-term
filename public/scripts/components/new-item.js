/* eslint-disable no-undef */
$(document).ready(function() {
  //const { addItem } = require('../db/queries/items');



  const $newItemForm = $(`<section id="container-to-vanish-post-form">
    <div id="post-new-item-div">
      <header id="post-form-header">
        <span id="post-title">Post Ad<span>
      </header>
      <form action="/api/users/items" method="POST" id="post-form-input">
        <div class="entire-div">
          <div class="input-group" id="left-side">
            <span id="pForm-titles">Ad title</span>
            <textarea name="text" class="input-text" id="title-input"></textarea>
            <span id="pForm-titles">Description</span>
            <textarea name="text" class="input-text" id="desc-input-area"></textarea>
            <span id="pForm-titles">Price</span>
            <textarea name="text" class="input-text" id="price-input"></textarea>
            <span id="pForm-titles">Cover photo</span>
            <textarea name="text" class="input-text" id="cover-photo"></textarea>
          </div>
          <div class="input-group" id="right-side">
            <span id="pForm-titles">Alternate photo 1</span>
            <textarea name="text" class="input-text" id="a-photo1-input"></textarea>
            <span id="pForm-titles">Alternate photo 2</span>
            <textarea name="text" class="input-text" id="a-photo2-input"></textarea>
            <span id="pForm-titles">City</span>
            <textarea name="text" class="input-text" id="city-input"></textarea>
            <span id="pForm-titles">Province</span>
            <textarea name="text" class="input-text" id="province-input"></textarea>
            <span id="pForm-titles">Community</span>
            <textarea name="text" class="input-text" id="community-input"></textarea>
            <div id="post-footer">
              <button type="submit" id="submit-button">
              <img src="/icons/submit.png" id="submit-icon">
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  `);


  window.$newItemForm = $newItemForm;

  $newItemForm.submit(function(event) {
    event.preventDefault();
    console.log("Testing post");
    const $newItem = $(this).find("#title-text").serialize();
    $.post("/api/users/items",$newItem)
      .then(() => {
        console.log("This is wehre I need to be");
        console.log('first value:', event.target[0].value);
        /*const returnItem = {
          owner_id: 1,
          title:
        }
        //addItem(newItem);
        //views_manager.show('item');
*/
      });
  });

});
