$(() => {




  const getAllItems = function(inputParam) {
    let url = "/api/items";
    if (inputParam) {
      url += "?" + inputParam;
    }
    //console.log("I AM Here11")
    return $.ajax(url, { method: 'GET' });
  };


  getAllItems().then(function(json) {
    standby.addStandbyListings(json.items);
    views_manager.show('standby');

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

    const openModal = function(title,coverPhoto, thumb1,
      thumb2, thumb3, desc, price, prov, city, comm) {

      $("#mCover").attr('src', coverPhoto);
      $("#thumb1").attr('src', thumb1);
      $("#thumb2").attr('src', thumb2);
      $("#thumb3").attr('src', thumb3);




      $desc.innerHTML = desc;

      textContainer.innerHTML = title;

      $city.innerHTML =  city;

      $comm.innerHTML = comm;



      console.log("Inner Price:" , price);
      $price.innerHTML = price;
      $prov.innerHTML = prov;
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };



    $(".item").on('click',function(event) {
      event.preventDefault();
      let tempItemId = event.currentTarget.dataset.id;
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

        openModal(jTitle,j.cover_photo_url,j.thumbnail_photo1_url,
          j.thumbnail_photo2_url,j.thumbnail_photo3_url, jDesc,
          jPrice, jProv, jCity, jComm);
      });




    });



  });


});
