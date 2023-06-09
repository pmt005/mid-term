$(() => {
  console.log("Line 2");



  window.shallowItemListing = {};

  const createShallowListing = function(inputItem) {
    return `
    <div class="parent">
      <article class="item" id="thisTest" data-id=${inputItem.id}, data-title=${inputItem.description}>
        <div class="thumbnail_photo1">
          <img src="${inputItem.cover_photo_url}">
        </div>
        <div id="item-info">
          <span><strong>Price:  </strong>${inputItem.price}</span>
          <br>
        <span><strong>Title:  </strong>${inputItem.title}</span>
        <br>
        <span><strong>City:  </strong>${inputItem.city}</span>
        </div>
      </article>

    <section class="modal hidden">
      <div id="modalTitle">
        <div id="mTitle"></div>
        <img id="mLike"src='/icons/like.png'>
        <img id="mMessage" src='/icons/message.png'>
      </div>



        <section id="work">

          <div class="container2">
            <img class="mPic" id="mCover"src="">
            <img class="mPic" id="thumb1"src="'>
          </div>
          <div class="container3">
            <img class="mPic" id="thumb2"src="'>
          </div>
          <div class="container4">
            <img class="mPic" id="thumb3"src="'>
          </div>

        </section>

      <div id="attempt"></div>


      <div class="modal-footer">
          <div class="info-square" id="mDesc"> </div>
          <div class="info-square" id="footer-info">
            <title><Strong>Price :</strong></title>
            <div class="info-square-inside" id="mPrice"><Strong>Price :</strong></div>
            <div class="info-square-inside" id="mProv"><Strong>Province :</strong></div>
            <div class="info-square-inside" id="mCity"><Strong>City :</strong></div>
            <div class="info-square-inside" id="mComm"><Strong>Community :</strong></div>

          </div>


      </div>
            </div>
    </section>

    <div class="overlay hidden"></div>



    `;
  };

  window.shallowItemListing.createShallowListing = createShallowListing;



   //Listener for get listed items
   $("#get-listed-items").submit(function(event) {
    event.preventDefault();
    console.log("listed button");
  });































});
