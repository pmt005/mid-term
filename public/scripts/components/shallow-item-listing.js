$(() => {
  console.log("Line 2");
  window.shallowItemListing = {};

  const createShallowListing = function(inputItem) {
    return `
    <article class="item" data-id=${inputItem.id}>
      <img class="thumbnail_photo1" src="${inputItem.cover_photo_url}">
      <div id="item-info">
        <span><strong>Price:  </strong>${inputItem.price}</span>
        <br>
       <span><strong>Title:  </strong>${inputItem.title}</span>
       <br>
       <span><strong>City:  </strong>${inputItem.city}</span>
      </div>
    </article>
    `;
  };

  window.shallowItemListing.createShallowListing = createShallowListing;

  $(".item").on('click',function(event) {
    event.preventDefault();
    console.log("TESTING TESTING");
    //$(this).attr();
  });

   //Listener for get listed items
   $("#get-listed-items").submit(function(event) {
    event.preventDefault();
    console.log("listed button");
  });































});
