/* eslint-disable no-undef */
/* eslint-disable func-style */
$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  function updateHeader() {

    let userLinks;
    userLinks = `
      <header id="header">
      <div id="top-left">
        <div id="icon-title">
          <img src="/icons/shop.png" id="titleIcon">
          <span id="title">Mid-term Marketplace</span>
        </div>

        <span id="creators"><div><strong>GROUP TWO </strong>project eight<br></div></span>
        <div id="header-footer">
          <form action="/items" method="GET" id="keyword-search">
            <textarea name="text" id="search-text" placeholder="search"></textarea>
          </form>
          <button type="submit" id="filter-button">filter</button>
        </div>
      </div>
    <div id="top-right">
      <div id="fav">
        <form action="/saved" method="GET" id="get-saved-items">
          <button type="submit" class="user-icon"><img src="/icons/fav.png " id="icon"> </button>
        <span id="creators"> <strong>Saved<br></strong></span>
        </form>
      </div>
      <div id="fav">
        <form action="/listed" method="GET" id="get-listed-items">
          <button type="submit" class="user-icon"><img src="/icons/sales.png" id = "icon"> </button>
          <span id="creators"> <strong>Listed<br></strong></span>
        </form>
      </div>
      <div id="fav">
        <form action="/post" method="GET" id="get-post-form">
          <button type="submit" class="user-icon"><img src="/icons/post.png" id="icon"> </button>
          <span id="creators"> <strong>Post<br></strong></span>
        </form>
      </div>
    </div>
    </header>

      `;

    $pageHeader.append(userLinks);
  }
  updateHeader();
  window.header.update = updateHeader;

  $(document).ready(function() {
    const $postForm = $("#container-to-vanish-post-form");
    const $savedItems = $postForm.parent().find("#container-to-vanish-saved");
    //Listener for post new item submit to get post new item form
    $("#get-post-form").on('click', function(event) {
      event.preventDefault();
      console.log("made it here");
      views_manager.show('newItem');
    });

    //Listener for get listed items
    $("#get-listed-items").submit(function(event) {
      event.preventDefault();
      console.log("listed button");
    });

    //Listener for post new item submit to get post new item form
    $("#get-saved-items").submit(function(event) {
      event.preventDefault();
      $savedItems.slideToggle();
      console.log("saved button");
    });
  });

});
