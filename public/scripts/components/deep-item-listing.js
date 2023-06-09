$(() => {

  window.deepItemListing = {};

  const createDeepListing = function(inputItem) {
    return `
    <article class="item">
      <img class="thumbnail_photo1" src="${inputItem.cover_photo_url}">
      <div id="item-info">
        <span><strong>Price:  </strong>${"$" + (inputItem.price/100).toFixed(2)}</span>
        <br>
       <span><strong>Title:  </strong>${inputItem.title}</span>
       <br>
       <span><strong>City:  </strong>${inputItem.city}</span>
      </div>
    </article>
    `;
  };

  window.deepItemListing.createListing = createDeepListing;
});
