/* eslint-disable no-undef */
$(document).ready(function () {
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


  // Make the $newItemForm accessible globally
  window.$newItemForm = $newItemForm;

  // Add a submit event handler to the form
  $newItemForm.submit(function (event) {
    event.preventDefault();

    // Retrieve form inputs using jQuery selectors
    const $form = $(this);
    const title = $form.find("#title-input").val();
    const description = $form.find("#desc-input-area").val();
    const price = $form.find("#price-input").val()*100;
    const coverPhoto = $form.find("#cover-photo").val();
    const altPhoto1 = $form.find("#a-photo1-input").val();
    const altPhoto2 = $form.find("#a-photo2-input").val();
    const city = $form.find("#city-input").val();
    const province = $form.find("#province-input").val();
    const community = $form.find("#community-input").val();

    // Create an object containing the form data
    const newItem = {
      title: title,
      description: description,
      price: price,
      coverPhoto: coverPhoto,
      altPhoto1: altPhoto1,
      altPhoto2: altPhoto2,
      city: city,
      province: province,
      community: community
    };

    // Send an AJAX POST request to the server using $.post()
    $.post("/api/items", newItem)
      .done(function (response) {
        console.log("Item posted successfully!");
        console.log(response);
        // Handle success response here
      })
      .fail(function (xhr, status, error) {
        console.error("Error posting item:", error);
        // Handle error response here
      });

  });

  // Append the new item form to the document
  // $("body").append($newItemForm);
});
