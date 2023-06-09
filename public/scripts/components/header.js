/* eslint-disable no-undef */
/* eslint-disable func-style */


$(document).ready(function() {
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
          <button type="submit" class="filter-button">filter</button>
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
      <form action="/post" method="GET" id="get-listed-items">
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
//
    $pageHeader.append(header);
  }
  window.header.update = updateHeader;
  updateHeader();

  const $keywordSearch = $pageHeader.find("#keyword-search");
  const $postForm = $("#container-to-vanish-post-form");
  const $savedItems = $postForm.parent().find("#container-to-vanish-saved");

  //Listener for post new item submit to get post new item form
  $("#get-post-form").on('click', function(event) {
    event.preventDefault();
    console.log("arrived");
    views_manager.show('newItem');
  });

  //Listener for redirect to home page
  $("#icon-title").hover(function(event) {
    $(this).css('cursor', 'pointer');
  });

  $("#icon-title").on('click', function() {
    window.location.href="/";
  });

  function getAllItems(inputParam) {
    let url = "/api/items";
    if (inputParam) {
      url += "?" + inputParam;
    }
    return $.ajax(url, { method: 'GET' });
  }

  $keywordSearch.submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    console.log("keyword search data: " + data);
    getAllItems(data).then(function(json) {
      console.log(json.items);
      shallowItemListings.addShallowListings(json.items);
      views_manager.show('shallowListings');

      const modal = document.querySelector(".modal");
      const overlay = document.querySelector(".overlay");
      const $desc = document.querySelector("#mDesc");
      const textContainer = document.querySelector("#mTitle");
      const $price = document.querySelector("#mPrice");
      const $prov = document.querySelector("#mProv");
      const $city = document.querySelector("#mCity");
      const $comm = document.querySelector("#mComm");


      const closeModal = function() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      };


      overlay.addEventListener("click", closeModal);


      document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          closeModal();
        }
      });

      const getAllItemsId = function(inputParam) {
        let url = "/api/id";
        if (inputParam) {
          url += "/" + inputParam;
        }
        console.log("I AM Here11");
        return $.ajax(url, { method: 'GET' });
      };

      const openModal = function(title, coverPhoto, thumb1,
        thumb2, thumb3, desc, price, prov, city, comm) {

        $("#mCover").attr('src', coverPhoto);
        $("#thumb1").attr('src', thumb1);
        $("#thumb2").attr('src', thumb2);
        $("#thumb3").attr('src', thumb3);




        $desc.innerHTML = desc;

        textContainer.innerHTML = title;

        $city.innerHTML = city;

        $comm.innerHTML = comm;



        console.log("Inner Price:", price);
        $price.innerHTML = price;
        $prov.innerHTML = prov;
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      };



      $(".item").on('click', function(event) {
        event.preventDefault();
        console.log("THIS IS THE TEST");
        let tempItemId = event.currentTarget.dataset.id;

        console.log(tempItemId[0]);
        const tempItemTitle = event.currentTarget.dataset.title;

        getAllItemsId(tempItemId).then(function(json) {
          const j = json.items[0];
          console.log(j.city);
          console.log(j.community);
          const jDesc = "<Strong>Description :</strong>" + j.description;
          const jCity = "<Strong>City :</strong>" + j.city;
          const jComm = "<Strong>Comm :</strong>" + j.community;
          const jProv = "<Strong>Prov :</strong>" + j.province;
          const jPrice = "<Strong>Price :</strong>" + "$" + (j.price/100).toFixed(2);
          const jTitle = "<h3>" + j.title + "</h3>";

          openModal(jTitle, j.cover_photo_url, j.thumbnail_photo1_url,
            j.thumbnail_photo2_url, j.thumbnail_photo3_url, jDesc,
            jPrice, jProv, jCity, jComm);
        });




      });



    });




    listed
    function getMyItems() {
      let url = "/api/items/listedItems";
      return $.ajax(url, { method: 'GET' });
    }

    //Listener for get listed items
    $("#icon").on('click',function(event) {
      event.preventDefault();
      getMyItems().then(function(json) {
        console.log(json);
        shallowItemListings.addShallowListings(json.items);
        views_manager.show('shallowListings');

        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");
        const $desc = document.querySelector("#mDesc");
        const textContainer = document.querySelector("#mTitle");
        const $price = document.querySelector("#mPrice");
        const $prov = document.querySelector("#mProv");
        const $city = document.querySelector("#mCity");
        const $comm = document.querySelector("#mComm");


        const closeModal = function() {
          modal.classList.add("hidden");
          overlay.classList.add("hidden");
        };


        overlay.addEventListener("click", closeModal);


        document.addEventListener("keydown", function(e) {
          if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
          }
        });

        const getAllItemsId = function(inputParam) {
          let url = "/api/id";
          if (inputParam) {
            url += "/" + inputParam;
          }
          console.log("I AM Here11");
          return $.ajax(url, { method: 'GET' });
        };

        const openModal = function(title, coverPhoto, thumb1,
          thumb2, thumb3, desc, price, prov, city, comm) {

          $("#mCover").attr('src', coverPhoto);
          $("#thumb1").attr('src', thumb1);
          $("#thumb2").attr('src', thumb2);
          $("#thumb3").attr('src', thumb3);




          $desc.innerHTML = desc;

          textContainer.innerHTML = title;

          $city.innerHTML = city;

          $comm.innerHTML = comm;



          console.log("Inner Price:", price);
          $price.innerHTML = price;
          $prov.innerHTML = prov;
          modal.classList.remove("hidden");
          overlay.classList.remove("hidden");
        };



        $(".item").on('click', function(event) {
          event.preventDefault();
          let tempItemId = event.currentTarget.dataset.id;

          console.log(tempItemId[0]);
          const tempItemTitle = event.currentTarget.dataset.title;

          getAllItemsId(tempItemId).then(function(json) {
            const j = json.items[0];
            console.log(j.city);
            console.log(j.community);
            const jDesc = "<Strong>Description :</strong>" + j.description;
            const jCity = "<Strong>City :</strong>" + j.city;
            const jComm = "<Strong>Comm :</strong>" + j.community;
            const jProv = "<Strong>Prov :</strong>" + j.province;
            const jPrice = "<Strong>Price :</strong>" + j.price;
            const jTitle = "<h3>" + j.title + "</h3>";

            openModal(jTitle, j.cover_photo_url, j.thumbnail_photo1_url,
              j.thumbnail_photo2_url, j.thumbnail_photo3_url, jDesc,
              jPrice, jProv, jCity, jComm);
          });




        });



      });
    });

  //Listener for get listed items
  $("#get-listed-items").submit(function(event) {
    event.preventDefault();
    userId = cookies.userId;
    console.log("this is the userId :", userId);
  });



  //Listener for saved items
  $("#get-saved-items").submit(function(event) {
    event.preventDefault();
    $savedItems.slideToggle();
    console.log("saved button");
  });


});




