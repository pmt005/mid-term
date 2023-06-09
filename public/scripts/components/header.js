/* eslint-disable no-undef */
/* eslint-disable func-style */


$(document).ready(function () {
  window.header = {};

  const $pageHeader = $('#page-header');
  function updateHeader() {

    let header;
    header = `
      <header id="header">
      <div id="top-left">
        <div id="icon-title">
          <img src="/icons/shop.png" id="titleIcon">
          <span id="title">Mid-term Marketplace</span>
        </div>

        <span id="creators"><div><strong>GROUP TWO </strong>project eight<br></div></span>
        <div id="header-footer">
          <form action="/items" method="GET" id="keyword-search">
              <input type="text" name="text" id="search-text" placeholder="search"></textarea>
              <button type="submit" class ="filter-button" id="keyword-search-button">Search</button>
          </form>
          <button type="button" class="filter-button" onclick="toggleFilterForm()">Filter</button>

          <div id="filter-form" style="display: none;">
            <label for="min-input">Minimum:</label>
            <input type="number" id="min-input" placeholder="Enter minimum value">
          
            <label for="max-input">Maximum:</label>
            <input type="number" id="max-input" placeholder="Enter maximum value">
          
            <button type="submit" onclick="filterByRange()">Apply</button>
          </div>
          
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

    $pageHeader.append(header);
  }
  window.header.update = updateHeader;
  updateHeader();

  const $keywordSearch = $pageHeader.find("#keyword-search");
  const $postForm = $("#container-to-vanish-post-form");
  const $savedItems = $postForm.parent().find("#container-to-vanish-saved");

  //Listener for post new item submit to get post new item form
  $("#get-post-form").on('click', function (event) {
    event.preventDefault();
    console.log("arrived");
    views_manager.show('newItem');
  });


  function getAllItems(inputParam) {
    let url = "/api/items";
    if (inputParam) {
      url += "?" + inputParam;
    }
    return $.ajax(url, { method: 'GET' });
  }

  $keywordSearch.submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    console.log("keyword search data: " + data);
    getAllItems(data).then(function (json) {
      console.log(json.items);
      shallowItemListings.addShallowListings(json.items);
      views_manager.show('shallowListings');
    });

  });

  //Listener for get listed items
  $("#get-listed-items").submit(function (event) {
    event.preventDefault();
    console.log("listed button");
  });

  //Listener for saved items
  $("#get-saved-items").submit(function (event) {
    event.preventDefault();
    $savedItems.slideToggle();
    console.log("saved button");
  });


});
